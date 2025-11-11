package com.casamento.config.jackson;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonToken;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.node.ArrayNode;

import java.io.IOException;
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;

/**
 * Allows a JSON property to be either an array of numbers
 * or a comma-separated string (e.g., "1,2,3").
 */
public class FlexibleBigIntegerListDeserializer extends JsonDeserializer<List<BigInteger>> {
    @Override
    public List<BigInteger> deserialize(JsonParser p, DeserializationContext ctxt) throws IOException {
        List<BigInteger> result = new ArrayList<>();

        JsonToken token = p.currentToken();
        if (token == JsonToken.START_ARRAY) {
            ArrayNode node = p.getCodec().readTree(p);
            node.forEach(n -> {
                if (n.isNumber()) {
                    result.add(n.bigIntegerValue());
                } else if (n.isTextual()) {
                    try {
                        result.add(new BigInteger(n.textValue().trim()));
                    } catch (NumberFormatException ignored) {}
                }
            });
            return result;
        }

        // Fallback: treat as string (comma/space separated)
        String text = p.getValueAsString("");
        if (!text.isBlank()) {
            String[] parts = text.split("[,;\\s]+");
            for (String part : parts) {
                if (part == null || part.isBlank()) continue;
                try {
                    result.add(new BigInteger(part.trim()));
                } catch (NumberFormatException ignored) {}
            }
        }
        return result;
    }
}


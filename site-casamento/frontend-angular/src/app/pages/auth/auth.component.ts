import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  private fb = inject(FormBuilder);
  private auth = inject(AuthService);

  mode: 'login' | 'register' = 'login';
  form: FormGroup = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(3)]]
  });
  loading = false;
  error: string | null = null;

  switchMode(next: 'login' | 'register') {
    this.mode = next;
    this.error = null;
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading = true;
    this.error = null;
    const { username, password } = this.form.value;

    const action = this.mode === 'login'
      ? this.auth.login({ username, password })
      : this.auth.register({ username, password });

    action.subscribe({
      next: () => {
        this.loading = false;
        // Nada a fazer aqui; AppComponent mostrará o conteúdo ao detectar auth
      },
      error: (err) => {
        this.loading = false;
        this.error = err?.error?.message || 'Ocorreu um erro. Tente novamente.';
      }
    });
  }
}


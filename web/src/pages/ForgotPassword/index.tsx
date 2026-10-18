import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom';

import './style.css';

function ForgotPassword() {

    const [email, setEmail] = useState('');

    const [sent, setSent] = useState(false);

    const history = useHistory();

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {

        event.preventDefault();

        const normalizedEmail = email.trim();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!normalizedEmail) {

            alert('Por favor, informe seu e-mail.');

            return;

        }

        if (!emailRegex.test(normalizedEmail)) {

            alert('Informe um e-mail válido.');

            return;

        }

        // Demonstração da tela de confirmação.

        // O envio real de e-mail ainda precisa de integração com o servidor.

        setSent(true);

    }

    if (sent) {

        return (
<div id="page-forgot-password">
<div className="forgot-content success-content">
<div className="forgot-form success-form">
<div className="success-icon" aria-hidden="true">

                            ✓
</div>
<h1>Redefinição enviada!</h1>
<p>

                            Boa, agora é só checar o e-mail que foi enviado

                            para você redefinir sua senha e aproveitar os estudos.
</p>
<button

                            type="button"

                            onClick={() => history.push('/')}
>

                            Voltar ao login
</button>
</div>
</div>
</div>

        );

    }

    return (
<div id="page-forgot-password">
<div className="forgot-content">
<div className="forgot-form">
<Link

                        to="/"

                        className="back-link"

                        aria-label="Voltar"
>

                        ←
</Link>
<h1>Eita, esqueceu sua senha?</h1>
<p>

                        Não esquenta, vamos dar um jeito nisso.
</p>
<form onSubmit={handleSubmit}>
<input

                            type="email"

                            placeholder="E-mail"

                            aria-label="E-mail"

                            value={email}

                            onChange={(event) =>

                                setEmail(event.target.value)

                            }

                            required

                        />
<button type="submit">

                            Enviar
</button>
</form>
</div>
<div className="forgot-brand">
<h1>Proffy</h1>
<p>Sua plataforma de estudos online.</p>
</div>
</div>
</div>

    );

}

export default ForgotPassword;
 
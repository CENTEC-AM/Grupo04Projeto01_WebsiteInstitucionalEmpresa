 implementaçãocss* ============================================================
   SCRIPT.JS – ByteWave Solutions
   Funcionalidades: validação de formulário, botão topo, menu mobile
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

    // =========================================================
    // 1. VALIDAÇÃO DO FORMULÁRIO
    // =========================================================

document.addEventListener('DOMContentLoaded', function () {

    
    // 1. VALIDAÇÃO DO FORMULÁRIO
  

    const form = document.getElementById('formContato');
    const feedback = document.getElementById('feedbackMsg');

    if (form) {
        form.addEventListener('submit', function (e) {

            e.preventDefault(); // Impede o envio real

            // Verifica se todos os campos obrigatórios estão preenchidos

            e.preventDefault(); 

            // Verificação se todos os campos estão obrigatorios 

            let isValid = true;
            const requiredFields = form.querySelectorAll('[required]');
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = 'red';
                } else {
                    field.style.borderColor = '#38bdf8';
                }
            });


            // Verifica se o email é válido (formato simples)

            // Verifica se o email esta válido 

            const email = document.getElementById('email');
            if (email && email.value) {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(email.value)) {
                    isValid = false;
                    email.style.borderColor = 'red';
                }
            }

            if (!isValid) {
                feedback.innerHTML = `
                    <div style="color: #b91c1c; background: #fee2e2; padding: 0.75rem 1rem; border-radius: 8px; border: 1px solid #fecaca;">
                        <i class="fas fa-exclamation-circle"></i> Por favor, preencha todos os campos corretamente.
                    </div>
                `;
                return;
            }

            // Se válido, exibe mensagem de sucesso
            feedback.innerHTML = `
                <div style="color: #065f46; background: #d1fae5; padding: 0.75rem 1rem; border-radius: 8px; border: 1px solid #a7f3d0;">
                    <i class="fas fa-check-circle"></i> Mensagem enviada com sucesso! Entraremos em contato em breve.
                </div>
            `;
            form.reset();

            // Limpa a mensagem após 5 segundos
            setTimeout(() => {
                feedback.innerHTML = '';
            }, 5000);
        });
    }


    // =========================================================
    // 2. BOTÃO VOLTAR AO TOPO (mostrar/ocultar + scroll suave)
    // =========================================================

    
    // 2. BOTÃO VOLTAR AO TOPO 

    const btnTopo = document.getElementById('btnTopo');

    if (btnTopo) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 300) {
                btnTopo.style.display = 'flex';
            } else {
                btnTopo.style.display = 'none';
            }
        });

        btnTopo.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }


    // =========================================================
    // 3. FECHA O MENU MOBILE AO CLICAR EM UM LINK
    // =========================================================

    
    // 3. FECHA O MENU MOBILE AO CLICAR EM UM LINK
   

    const navLinks = document.querySelectorAll('header nav ul li a');
    const navUl = document.querySelector('header nav ul');

    if (navUl) {
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                // Se estiver em modo mobile (menu aberto), fecha
                if (window.innerWidth <= 768) {
                    navUl.style.display = 'none';

                    // Pequeno delay para reabrir se clicar no toggle (mas o toggle não existe aqui)
                    // Como não temos toggle, apenas escondemos
                }
            });
        });
    }

    // =========================================================
    // 4. (OPCIONAL) MASCARA PARA TELEFONE (exemplo)
    // =========================================================
    // Se você tiver um campo de telefone, pode adicionar máscara aqui.
    // Exemplo: document.getElementById('telefone')?.addEventListener('input', ...)


                }
            });
        });
    }


    console.log('✅ ByteWave Solutions - JavaScript carregado com sucesso!');
});
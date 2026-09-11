const categories = [
["🔧","Mecânico","Mecânica automotiva"],["⚡","Eletricista","Instalações elétricas"],["🚿","Encanador","Água e hidráulica"],["🎨","Pintor","Pintura residencial"],["🧱","Pedreiro","Obras e reformas"],["🪚","Marceneiro","Móveis e madeira"],["❄️","Técnico de ar-condicionado","Climatização"],["🧹","Diarista","Limpeza residencial"],["🌳","Jardineiro","Jardinagem"],["💻","Técnico de informática","Computadores"],["📱","Técnico de celular","Celulares e tablets"],["🔑","Chaveiro","Chaves e fechaduras"],["🚗","Lavador automotivo","Estética automotiva"],["📦","Montador de móveis","Montagem"],["🧺","Lavanderia","Lavagem de roupas"],["🐕","Adestrador","Animais"],["🐈","Pet sitter","Cuidados com pets"],["📸","Fotógrafo","Fotografia"],["🎥","Videomaker","Vídeos"],["💇","Cabeleireiro","Beleza"],["💅","Manicure","Unhas"],["💄","Maquiador","Maquiagem"],["🧵","Costureiro","Costura e ajustes"],["👟","Sapateiro","Calçados"],["📚","Professor particular","Aulas"],["🗣️","Professor de idiomas","Idiomas"],["🎸","Professor de música","Música"],["🏋️","Personal trainer","Fitness"],["🧘","Instrutor de yoga","Bem-estar"],["📋","Contador","Contabilidade"],["⚖️","Advogado","Serviços jurídicos"],["🏠","Corretor de imóveis","Imóveis"],["📐","Arquiteto","Arquitetura"],["🧮","Engenheiro","Engenharia"],["🪟","Vidraceiro","Vidros"],["🏗️","Serralheiro","Metalurgia"],["🛋️","Tapeceiro","Estofados"],["🧼","Higienização de sofá","Limpeza especializada"],["🪳","Dedetizador","Controle de pragas"],["🚚","Frete e mudanças","Transporte"],["🛵","Entregador","Entregas"],["🖨️","Técnico de impressora","Impressoras"],["📡","Técnico de internet","Redes"],["📺","Técnico de TV","Eletrônicos"],["🔌","Instalador de tomadas","Elétrica"],["💡","Instalador de iluminação","Iluminação"],["🔨","Montador","Montagens gerais"],["🏊","Manutenção de piscina","Piscinas"],["🧯","Técnico de segurança","Segurança"],["🔋","Técnico de bateria","Baterias"],["🚲","Mecânico de bicicletas","Bicicletas"],["🏍️","Mecânico de motos","Motocicletas"],["🚘","Funileiro","Funilaria"],["🛞","Borracheiro","Pneus"],["🧑‍🍳","Cozinheiro","Culinária"],["🍰","Confeiteiro","Confeitaria"],["🍽️","Garçom para eventos","Eventos"],["🎉","Organizador de eventos","Eventos"],["💐","Florista","Flores"],["🪴","Paisagista","Paisagismo"],["🧽","Piscineiro","Manutenção"],["🧱","Azulejista","Revestimentos"],["🪜","Gesseiro","Gesso"],["🏠","Telhadista","Telhados"],["🚪","Instalador de portas","Portas"],["🪟","Instalador de janelas","Janelas"],["🧰","Montador industrial","Montagem industrial"],["⚙️","Torneiro mecânico","Usinagem"],["🔩","Soldador","Soldagem"],["🪑","Restaurador de móveis","Restauração"],["🧴","Impermeabilizador","Impermeabilização"],["🧯","Extintores","Manutenção"],["🔒","Instalador de câmeras","CFTV"],["🚨","Alarmes","Segurança eletrônica"],["📶","Instalador de antena","Antenas"],["🎮","Técnico de videogame","Consoles"],["🖥️","Técnico de notebook","Notebooks"],["⌨️","Montador de PC","Computadores"],["🌐","Desenvolvedor web","Sites"],["🎨","Designer gráfico","Design"],["✍️","Redator","Textos"],["📣","Social media","Redes sociais"],["📊","Analista de dados","Dados"],["📸","Editor de fotos","Edição"],["🎬","Editor de vídeo","Edição de vídeo"],["🎧","DJ","Eventos"],["🎤","Cantor","Música"],["🎹","Pianista","Música"],["🎻","Músico","Música"],["🎭","Ator","Arte"],["🖌️","Ilustrador","Arte"],["🧑‍🎨","Artista","Arte"],["🧠","Psicopedagogo","Educação"],["👶","Babá","Cuidados infantis"],["🧓","Cuidador de idosos","Cuidados"],["♿","Cuidador especializado","Acompanhamento"],["🐶","Passeador de cães","Pets"],["🐾","Banho e tosa","Pets"],["🌱","Cuidador de plantas","Plantas"],["🏡","Caseiro","Residências"],["🧹","Limpeza pós-obra","Limpeza"],["🪣","Lavador de caixa d'água","Higienização"],["🧴","Limpeza de piscina","Piscinas"],["🪑","Montagem de escritório","Móveis"],["📦","Empacotador","Mudanças"],["🚛","Transportador","Transporte"],["🚐","Motorista particular","Transporte"],["🚕","Motorista para eventos","Transporte"],["📑","Despachante","Documentação"],["📝","Digitador","Serviços digitais"],["🖥️","Assistência remota","Tecnologia"],["🔧","Manutenção geral","Manutenção"],["🏚️","Reforma residencial","Reformas"],["🏢","Manutenção predial","Predial"],["🏬","Manutenção comercial","Comercial"],["💧","Limpeza de caixa d'água","Higienização"],["🧹","Limpeza comercial","Limpeza"],["🪟","Limpeza de vidros","Limpeza"],["🧽","Limpeza de estofados","Limpeza"],["🚿","Desentupidor","Hidráulica"],["🔥","Técnico de gás","Gás"],["☀️","Instalador solar","Energia solar"],["🔋","Eletricista automotivo","Automotiva"],["🚘","Polimento automotivo","Automotiva"],["✨","Martelinho de ouro","Automotiva"],["🛠️","Guincho","Automotiva"],["🚙","Inspeção veicular","Automotiva"],["🏍️","Entregas de moto","Transporte"],["📦","Montador de estruturas","Montagem"],["🎪","Montador de eventos","Eventos"],["💡","Iluminador de eventos","Eventos"],["🌐","Instalador de rede","Tecnologia"],["🔐","Especialista em segurança digital","Tecnologia"],["🧾","Consultor financeiro","Finanças"],["💼","Consultor empresarial","Negócios"],["📢","Consultor de marketing","Marketing"],["🧑‍💻","Suporte técnico","Tecnologia"],["📖","Professor de reforço","Educação"],["🎓","Orientador acadêmico","Educação"],["🧒","Recreador infantil","Eventos"],["🎂","Decorador de festas","Eventos"],["💐","Decorador","Decoração"],["🏠","Designer de interiores","Interiores"],["🧱","Designer de móveis","Móveis"],["🌿","Podador de árvores","Jardinagem"],["🌾","Paisagista residencial","Jardinagem"],["🐝","Apicultor","Serviços rurais"],["🌾","Serviços rurais","Campo"],["🚜","Operador de máquinas","Máquinas"],["🔧","Manutenção de máquinas","Máquinas"],["🧰","Manutenção industrial","Industrial"],["⚙️","Mecânico industrial","Industrial"],["🧪","Técnico de laboratório","Laboratório"],["📡","Técnico em eletrônica","Eletrônica"],["🔬","Técnico especializado","Técnico"],["🩹","Enfermeiro particular","Cuidados"],["💆","Massoterapeuta","Bem-estar"],["💇","Barbeiro","Beleza"],["🧖","Esteticista","Estética"],["💍","Joalheiro","Joias"],["⌚","Relojoeiro","Relógios"],["🎹","Afinador de instrumentos","Música"],["📦","Personal organizer","Organização"],["🧺","Passadeira","Roupas"],["🧹","Auxiliar doméstico","Casa"],["🧑‍🌾","Hortelão","Jardinagem"],["🐴","Cuidador de cavalos","Animais"],["📷","Fotógrafo de eventos","Fotografia"],["💒","Fotógrafo de casamento","Fotografia"],["💻","Criador de sistemas","Tecnologia"],["🤖","Automação","Tecnologia"],["🖨️","Impressão 3D","Tecnologia"],["🎁","Personalização de presentes","Artesanato"],["🧶","Artesão","Artesanato"],["🕯️","Fabricante de velas","Artesanato"],["🪵","Entalhador","Artesanato"],["🧑‍🔧","Técnico geral","Manutenção"],["📋","Consultor","Consultoria"],["🔍","Perito","Análise"],["🗺️","Guia turístico","Turismo"],["✈️","Consultor de viagens","Turismo"],["🏕️","Organizador de acampamento","Turismo"],["🎯","Instrutor","Treinamento"],["🗣️","Palestrante","Eventos"],["🧑‍🏫","Instrutor profissional","Cursos"]
];

const professionals = [
{name:"Marcos Silva",role:"Eletricista",rating:"4,9",jobs:127,city:"Recife, PE",tags:["Instalação","Manutenção","Elétrica"],initials:"MS"},
{name:"Ana Beatriz",role:"Diarista",rating:"4,8",jobs:94,city:"Jaboatão dos Guararapes, PE",tags:["Limpeza","Organização"],initials:"AB"},
{name:"Carlos Henrique",role:"Mecânico",rating:"5,0",jobs:218,city:"Recife, PE",tags:["Carros","Diagnóstico","Motor"],initials:"CH"},
{name:"Rafael Souza",role:"Técnico de informática",rating:"4,7",jobs:83,city:"Olinda, PE",tags:["PC","Notebook","Redes"],initials:"RS"},
{name:"Juliana Lima",role:"Cabeleireira",rating:"4,9",jobs:156,city:"Recife, PE",tags:["Cabelo","Coloração"],initials:"JL"},
{name:"Pedro Santos",role:"Encanador",rating:"4,8",jobs:111,city:"Paulista, PE",tags:["Hidráulica","Desentupimento"],initials:"PS"}
];

const SUPABASE_URL = window.RESOLVEJA_CONFIG?.SUPABASE_URL || "";
const SUPABASE_KEY = window.RESOLVEJA_CONFIG?.SUPABASE_PUBLISHABLE_KEY || "";
const supabaseReady = Boolean(SUPABASE_URL && SUPABASE_KEY && window.supabase);
const sb = supabaseReady ? window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY) : null;

function showPage(id){
    document.querySelectorAll(".page").forEach(p=>p.classList.remove("active-page"));
    const page=document.getElementById(id);
    if(!page)return;
    page.classList.add("active-page");
    document.querySelectorAll(".nav-link").forEach(b=>b.classList.toggle("active",b.dataset.page===id));
    window.scrollTo({top:0,behavior:"smooth"});
}

function renderServices(){
    const q=(document.getElementById("serviceSearch")?.value||"").toLowerCase();
    const grid=document.getElementById("categoryGrid");
    if(!grid)return;
    grid.innerHTML=categories.filter(c=>(c[1]+" "+c[2]).toLowerCase().includes(q)).map(c=>`<button class="category" onclick="openProfessionals('${c[1].replace(/'/g,"\\'")}')"><span class="ico">${c[0]}</span><b>${c[1]}</b><small>${c[2]}</small></button>`).join("");
}

async function renderPros(cat="Profissionais disponíveis"){
    const grid=document.getElementById("proGrid");
    if(!grid)return;

    let list=[];

    if(sb){
        const {data,error}=await sb.from("profissionais").select("id,nome,cidade,estado,profissao,experiencia,descricao,verificado,status").eq("status","aprovado").eq("verificado",true).order("criado_em",{ascending:false});
        if(!error)list=data||[];
    }

    if(!list.length){
        list=professionals.map(p=>({
            id:null,
            nome:p.name,
            cidade:p.city,
            profissao:p.role,
            experiencia:"",
            descricao:"Profissional verificado pela ResolveJá.",
            verificado:true,
            status:"aprovado",
            rating:p.rating,
            jobs:p.jobs,
            tags:p.tags,
            initials:p.initials
        }));
    }

    if(cat && cat!=="Profissionais disponíveis"){
        list=list.filter(p=>String(p.profissao||"").toLowerCase().includes(cat.toLowerCase()));
    }

    if(!list.length){
        grid.innerHTML=`<div class="panel"><h3>Nenhum profissional encontrado</h3><p>Não encontramos profissionais aprovados nessa categoria ainda.</p></div>`;
        return;
    }

    grid.innerHTML=list.map(p=>{
        const initials=(p.nome||"RJ").split(/\s+/).slice(0,2).map(x=>x[0]).join("").toUpperCase();
        const rating=p.rating||"—";
        const jobs=p.jobs||0;

        return `<article class="pro-card">
            <div class="pro-top">
                <div class="avatar">${p.initials||initials}</div>
                <div>
                    <h3>${escapeHtml(p.nome)}</h3>
                    <div class="role">${escapeHtml(p.profissao||"")} • ${escapeHtml(p.cidade||"")}${p.estado?" - "+escapeHtml(p.estado):""}</div>
                </div>
                <span class="verified">✓</span>
            </div>
            <div class="rating">★★★★★ <span>${rating}</span></div>
            <p>${escapeHtml(p.descricao||"Profissional verificado pela ResolveJá.")}</p>
            <div class="chips">${(p.tags||[]).map(t=>`<span class="chip">${escapeHtml(t)}</span>`).join("")}</div>
            <button class="btn btn-primary" style="width:100%;margin-top:15px" onclick="contactPro('${p.id||""}','${String(p.nome||"").replace(/'/g,"\\'")}')">Ver perfil</button>
        </article>`;
    }).join("");
}

function escapeHtml(v){
    return String(v??"").replace(/[&<>'"]/g,c=>({
        "&":"&amp;",
        "<":"&lt;",
        ">":"&gt;",
        "'":"&#39;",
        '"':"&quot;"
    }[c]));
}

function openProfessionals(cat){
    showPage("professionals");
    document.getElementById("proTitle").textContent=cat+" — profissionais";
    renderPros(cat);
}

async function contactPro(id,name){
    if(!sb||!id){
        openModal(`
            <h2>${escapeHtml(name)}</h2>
            <p>Este perfil é um exemplo enquanto o banco ainda não possui profissionais aprovados.</p>
            <div class="notice">🛡️ A ResolveJá protege contra compartilhamento de contatos externos.</div>
            <button class="btn btn-primary" style="width:100%" onclick="closeModal()">Entendi</button>
        `);
        return;
    }

    const {data,error}=await sb.from("profissionais")
        .select("id,nome,cidade,estado,profissao,experiencia,descricao,verificado,status")
        .eq("id",id)
        .single();

    if(error||!data){
        openModal(`<h2>Não foi possível abrir o perfil</h2><div class="notice">Tente novamente.</div>`);
        return;
    }

    openModal(`
        <h2>${escapeHtml(data.nome)}</h2>
        <p><b>${escapeHtml(data.profissao)}</b> • ${escapeHtml(data.cidade||"")}${data.estado?" - "+escapeHtml(data.estado):""}</p>
        <p>${escapeHtml(data.descricao||"Sem descrição.")}</p>
        <p><b>Experiência:</b> ${escapeHtml(data.experiencia||"Não informado")}</p>
        <div class="notice">🛡️ Para sua segurança, telefone, WhatsApp, @usuários e contatos externos não podem ser compartilhados pelo chat.</div>
        <button class="btn btn-primary" style="width:100%" onclick="requestService('${data.id}')">Solicitar serviço</button>
    `);
}

function openModal(content){
    document.getElementById("modalContent").innerHTML=content;
    document.getElementById("modal").classList.remove("hidden");
}

function closeModal(){
    document.getElementById("modal").classList.add("hidden");
}

function requireBackend(){
    if(!supabaseReady){
        openModal(`
            <h2>Conecte o Supabase</h2>
            <p>Abra <b>config.js</b> e coloque a URL e a chave publishable do seu projeto Supabase.</p>
            <div class="notice">Nunca coloque a chave service_role no site.</div>
            <button class="btn btn-primary" style="width:100%" onclick="closeModal()">Entendi</button>
        `);
        return false;
    }

    return true;
}

let pendingClientSignup=null;
let pendingProfessionalSignup=null;

function openRegister(){
    openModal(`
        <h2>Crie sua conta</h2>
        <p>Tenha acesso à busca de profissionais, solicitações e avaliações.</p>

        <div class="form-group">
            <label>Nome completo</label>
            <input id="clientName" placeholder="Seu nome completo">
        </div>

        <div class="form-group">
            <label>E-mail</label>
            <input id="clientEmail" type="email" autocomplete="email" placeholder="seuemail@exemplo.com">
        </div>

        <div class="form-group">
            <label>Senha</label>
            <input id="clientPass" type="password" autocomplete="new-password" placeholder="Crie uma senha">
        </div>

        <div id="registerError" class="notice hidden"></div>

        <button class="btn btn-primary" style="width:100%" onclick="createClientAccount()">
            Criar minha conta
        </button>

        <div class="modal-divider">ou</div>

        <button class="btn btn-outline" style="width:100%" onclick="openProfessionalRegister()">
            Crie uma conta profissional
        </button>
    `);
}

function openOtpVerification(email,kind){
    const title=kind==="professional"
        ?"Confirme seu e-mail profissional"
        :"Confirme seu e-mail";

    openModal(`
        <div class="success-icon">✉</div>

        <h2>${title}</h2>

        <p>
            Enviamos um <b>código de 6 dígitos</b> para
            <b>${escapeHtml(email)}</b>.
            Digite o código recebido no Gmail.
        </p>

        <div class="form-group">
            <label>Código de confirmação</label>
            <input
                id="otpCode"
                inputmode="numeric"
                autocomplete="one-time-code"
                maxlength="6"
                placeholder="000000"
            >
        </div>

        <div id="otpError" class="notice hidden"></div>

        <button class="btn btn-primary" style="width:100%" onclick="verifySignupOtp('${kind}')">
            Confirmar código
        </button>

        <button class="btn btn-ghost" style="width:100%;margin-top:8px" onclick="resendSignupOtp('${escapeHtml(email)}')">
            Enviar outro código
        </button>
    `);
}

async function createClientAccount(){
    if(!requireBackend())return;

    const name=document.getElementById("clientName").value.trim();
    const email=document.getElementById("clientEmail").value.trim();
    const pass=document.getElementById("clientPass").value;
    const e=document.getElementById("registerError");

    if(!name||!email||pass.length<6){
        e.textContent="Preencha os campos e use uma senha com pelo menos 6 caracteres.";
        e.classList.remove("hidden");
        return;
    }

    pendingClientSignup={name,email,pass};

    const {data,error}=await sb.auth.signUp({
        email,
        password:pass,
        options:{
            data:{
                nome:name,
                tipo:"cliente"
            }
        }
    });

    if(error){
        pendingClientSignup=null;
        e.textContent=error.message;
        e.classList.remove("hidden");
        return;
    }

    if(data.user&&data.session){
        await ensureUserProfile(data.user,name,"cliente");
        closeModal();
        enterClient(name);
        return;
    }

    openOtpVerification(email,"client");
}

function openProfessionalRegister(){
    openModal(`
        <h2>Crie uma conta profissional</h2>
        <p>O cadastro passa por análise antes de aparecer para os clientes.</p>

        <div class="form-group">
            <label>Nome completo</label>
            <input id="proName" placeholder="Seu nome completo">
        </div>

        <div class="form-group">
            <label>Telefone</label>
            <input id="proPhone" placeholder="Seu telefone">
        </div>

        <div class="form-group">
            <label>E-mail</label>
            <input id="proEmail" type="email" autocomplete="email" placeholder="seuemail@exemplo.com">
        </div>

        <div class="form-group">
            <label>Senha</label>
            <input id="proPass" type="password" autocomplete="new-password" placeholder="Crie uma senha">
        </div>

        <div class="form-group">
            <label>Data de nascimento</label>
            <input id="proBirth" type="date">
        </div>

        <div class="form-group">
            <label>Cidade</label>
            <input id="proCity" placeholder="Ex.: Recife">
        </div>

        <div class="form-group">
            <label>Estado</label>
            <input id="proState" maxlength="2" placeholder="Ex.: PE">
        </div>

        <div class="form-group">
            <label>Profissão</label>
            <input id="proJob" placeholder="Ex.: Eletricista">
        </div>

        <div class="form-group">
            <label>Tempo de experiência</label>
            <input id="proExperience" placeholder="Ex.: 5 anos">
        </div>

        <div class="form-group">
            <label>Descrição do serviço</label>
            <textarea id="proDescription" rows="3" placeholder="Conte sobre seu trabalho e experiência"></textarea>
        </div>

        ${[1,2,3,4,5].map(i=>`
            <div class="reference-card">
                <b>Cliente anterior ${i}</b>

                <div class="form-group">
                    <label>Nome</label>
                    <input id="ref${i}Name" placeholder="Nome do cliente">
                </div>

                <div class="form-group">
                    <label>Telefone</label>
                    <input id="ref${i}Phone" inputmode="tel" placeholder="Telefone do cliente">
                </div>
            </div>
        `).join("")}

        <div class="notice">
            A ResolveJá entrará em contato com as 5 referências.
            O cadastro só será aprovado após análise da equipe.
        </div>

        <div id="proRegisterError" class="notice hidden"></div>

        <button class="btn btn-primary" style="width:100%" onclick="submitProfessionalApplication()">
            Enviar para análise
        </button>
    `);
}

async function submitProfessionalApplication(){
    if(!requireBackend())return;

    const get=id=>document.getElementById(id)?.value.trim()||"";

    const values={
        name:get("proName"),
        phone:get("proPhone"),
        email:get("proEmail"),
        pass:document.getElementById("proPass")?.value||"",
        birth:get("proBirth"),
        city:get("proCity"),
        state:get("proState").toUpperCase(),
        job:get("proJob"),
        experience:get("proExperience"),
        description:get("proDescription")
    };

    const e=document.getElementById("proRegisterError");

    const missing=
        Object.entries(values).some(([k,v])=>k!=="pass"&&!v)
        ||values.pass.length<6;

    if(missing){
        e.textContent="Preencha todos os campos e use uma senha com pelo menos 6 caracteres.";
        e.classList.remove("hidden");
        return;
    }

    const refs=[];

    for(let i=1;i<=5;i++){
        const name=get(`ref${i}Name`);
        const phone=get(`ref${i}Phone`);

        if(!name||!phone){
            e.textContent=`Preencha o nome e telefone da referência ${i}.`;
            e.classList.remove("hidden");
            return;
        }

        refs.push({
            nome:name,
            telefone:phone,
            ordem:i,
            contato_verificado:false
        });
    }

    pendingProfessionalSignup={values,refs};

    const {data,error}=await sb.auth.signUp({
        email:values.email,
        password:values.pass,
        options:{
            data:{
                nome:values.name,
                tipo:"profissional"
            }
        }
    });

    if(error){
        pendingProfessionalSignup=null;
        e.textContent=error.message;
        e.classList.remove("hidden");
        return;
    }

    if(data.session){
        await finishProfessionalSignup(data.user);
        return;
    }

    openOtpVerification(values.email,"professional");
}

async function verifySignupOtp(kind){
    const code=document.getElementById("otpCode")?.value.trim();
    const e=document.getElementById("otpError");

    const pending=
        kind==="professional"
            ?pendingProfessionalSignup
            :pendingClientSignup;

    if(!pending){
        e.textContent="Esta confirmação expirou. Recomece o cadastro.";
        e.classList.remove("hidden");
        return;
    }

    const email=
        kind==="professional"
            ?pending.values.email
            :pending.email;

    if(!/^\d{6}$/.test(code)){
        e.textContent="Digite o código de 6 dígitos recebido no Gmail.";
        e.classList.remove("hidden");
        return;
    }

    const {data,error}=await sb.auth.verifyOtp({
        email,
        token:code,
        type:"signup"
    });

    if(error){
        e.textContent="Código inválido ou expirado. Solicite outro código e tente novamente.";
        e.classList.remove("hidden");
        return;
    }

    if(kind==="professional"){
        await finishProfessionalSignup(data.user);
    }else{
        await ensureUserProfile(
            data.user,
            pending.name,
            "cliente"
        );

        pendingClientSignup=null;
        closeModal();
        enterClient(pending.name);
    }
}

async function resendSignupOtp(email){
    const {error}=await sb.auth.resend({
        type:"signup",
        email
    });

    const e=document.getElementById("otpError");

    if(error){
        e.textContent=error.message;
        e.classList.remove("hidden");
        return;
    }

    e.textContent="Novo código enviado. Verifique o Gmail.";
    e.classList.remove("hidden");
}

async function finishProfessionalSignup(user){
    const pending=pendingProfessionalSignup;

    if(!pending)return;

    const v=pending.values;

    const profile=await ensureUserProfile(
        user,
        v.name,
        "profissional",
        v.phone,
        v.city,
        v.state
    );

    if(profile.error){
        const e=
            document.getElementById("otpError")
            ||document.getElementById("proRegisterError");

        e.textContent=profile.error.message;
        e.classList.remove("hidden");
        return;
    }

    const {data:pro,error:proError}=await sb.from("profissionais")
        .insert({
            usuario_id:user.id,
            nome:v.name,
            telefone:v.phone,
            email:v.email,
            data_nascimento:v.birth,
            cidade:v.city,
            estado:v.state,
            profissao:v.job,
            experiencia:v.experience,
            descricao:v.description,
            status:"pendente",
            verificado:false
        })
        .select()
        .single();

    if(proError){
        const e=
            document.getElementById("otpError")
            ||document.getElementById("proRegisterError");

        e.textContent=proError.message;
        e.classList.remove("hidden");
        return;
    }

    const refs=pending.refs.map(r=>({
        ...r,
        profissional_id:pro.id
    }));

    const {error:refError}=await sb.from("referencias").insert(refs);

    if(refError){
        const e=
            document.getElementById("otpError")
            ||document.getElementById("proRegisterError");

        e.textContent=refError.message;
        e.classList.remove("hidden");
        return;
    }

    pendingProfessionalSignup=null;

    closeModal();

    openModal(`
        <div class="success-icon">✓</div>

        <h2>Cadastro enviado!</h2>

        <p>
            Seu cadastro foi enviado para análise.
            A equipe verificará suas 5 referências antes da aprovação.
        </p>

        <div class="notice">
            Você só aparecerá como profissional após a aprovação.
        </div>

        <button class="btn btn-primary" style="width:100%" onclick="closeModal()">
            Concluir
        </button>
    `);
}

async function ensureUserProfile(
    user,
    name,
    tipo,
    telefone="",
    cidade="",
    estado=""
){
    const {data,error}=await sb.from("usuarios")
        .upsert({
            id:user.id,
            nome:name,
            telefone,
            cidade,
            estado,
            tipo
        },{
            onConflict:"id"
        })
        .select()
        .single();

    return {data,error};
}

function login(){
    openModal(`
        <h2>Entrar</h2>

        <p>
            Digite seu e-mail e enviaremos um
            <b>código de 6 dígitos</b>.
        </p>

        <div class="form-group">
            <label>E-mail</label>
            <input
                id="loginUser"
                type="email"
                autocomplete="email"
                placeholder="seuemail@exemplo.com"
            >
        </div>

        <div id="loginError" class="notice hidden"></div>

        <button class="btn btn-primary" style="width:100%" onclick="doLogin()">
            Enviar código
        </button>

        <div class="modal-divider">
            Ainda não tem conta?
        </div>

        <button class="btn btn-outline" style="width:100%" onclick="openRegister()">
            Crie sua conta
        </button>
    `);
}

async function doLogin(){
    if(!requireBackend())return;

    const u=document.getElementById("loginUser").value.trim();
    const e=document.getElementById("loginError");

    if(!u){
        e.textContent="Digite seu e-mail.";
        e.classList.remove("hidden");
        return;
    }

    const {error}=await sb.auth.signInWithOtp({
        email:u,
        options:{
            shouldCreateUser:false
        }
    });

    if(error){
        e.textContent="Não foi possível enviar o código. Verifique o e-mail e tente novamente.";
        e.classList.remove("hidden");
        return;
    }

    openLoginOtp(u);
}

function openLoginOtp(email){
    openModal(`
        <div class="success-icon">✉</div>

        <h2>Digite o código</h2>

        <p>
            Enviamos um <b>código de 6 dígitos</b> para
            <b>${escapeHtml(email)}</b>.
        </p>

        <div class="form-group">
            <label>Código de acesso</label>

            <input
                id="loginOtpCode"
                inputmode="numeric"
                autocomplete="one-time-code"
                maxlength="6"
                placeholder="000000"
            >
        </div>

        <div id="loginOtpError" class="notice hidden"></div>

        <button class="btn btn-primary" style="width:100%" onclick="verifyLoginOtp('${escapeHtml(email)}')">
            Entrar
        </button>

        <button class="btn btn-ghost" style="width:100%;margin-top:8px" onclick="resendLoginOtp('${escapeHtml(email)}')">
            Enviar outro código
        </button>
    `);
}

async function verifyLoginOtp(email){
    const code=document.getElementById("loginOtpCode")?.value.trim();
    const e=document.getElementById("loginOtpError");

    if(!/^\d{6}$/.test(code)){
        e.textContent="Digite o código de 6 dígitos recebido no seu e-mail.";
        e.classList.remove("hidden");
        return;
    }

    const {data,error}=await sb.auth.verifyOtp({
        email,
        token:code,
        type:"email"
    });

    if(error){
        e.textContent="Código inválido ou expirado. Solicite outro código.";
        e.classList.remove("hidden");
        return;
    }

    await routeAuthenticatedUser(data.user);
}

async function resendLoginOtp(email){
    const {error}=await sb.auth.signInWithOtp({
        email,
        options:{
            shouldCreateUser:false
        }
    });

    const e=document.getElementById("loginOtpError");

    if(error){
        e.textContent="Não foi possível enviar outro código. Tente novamente.";
        e.classList.remove("hidden");
        return;
    }

    e.textContent="Novo código enviado. Verifique seu e-mail.";
    e.classList.remove("hidden");
}

async function routeAuthenticatedUser(user){
    const {data:admin}=await sb.from("administradores")
        .select("cargo,ativo")
        .eq("usuario_id",user.id)
        .eq("ativo",true)
        .maybeSingle();

    closeModal();

    if(admin){
        enterAdmin(admin.cargo.toLowerCase()==="master");
        return;
    }

    const {data:profile}=await sb.from("usuarios")
        .select("nome,tipo")
        .eq("id",user.id)
        .maybeSingle();

    enterClient(
        profile?.nome
        ||user.user_metadata?.nome
        ||user.email?.split("@")[0]
        ||"Cliente"
    );
}

function enterClient(name){
    document.getElementById("publicNav").classList.remove("hidden");
    document.getElementById("userNav").classList.remove("hidden");

    document.getElementById("welcome").textContent=
        "Olá, "+String(name).split(" ")[0]+"!";

    document.querySelectorAll(".auth-only")
        .forEach(x=>x.style.display="");

    document.querySelectorAll(".master-only")
        .forEach(x=>x.style.display="none");

    showPage("home");
}

function enterAdmin(master){
    document.getElementById("publicNav").classList.add("hidden");
    document.getElementById("userNav").classList.remove("hidden");

    document.getElementById("welcome").textContent=
        master
            ?"👑 Conta Mestre"
            :"🛡️ ADM";

    showPage("admin");

    document.querySelectorAll(".master-only")
        .forEach(x=>x.style.display=master?"block":"none");

    adminPage(
        "dashboard",
        document.querySelector(".side-btn")
    );
}

async function logout(){
    if(sb)await sb.auth.signOut();

    document.getElementById("userNav").classList.add("hidden");
    document.getElementById("publicNav").classList.remove("hidden");

    document.querySelectorAll(".auth-only")
        .forEach(x=>x.style.display="none");

    showPage("home");
}

async function requestService(professionalId){
    if(!sb){
        requireBackend();
        return;
    }

    const {data:{user}}=await sb.auth.getUser();

    if(!user){
        closeModal();
        login();
        return;
    }

    const description=prompt(
        "Descreva o serviço que você precisa:"
    );

    if(description===null)return;

    const {error}=await sb.from("servicos").insert({
        cliente_id:user.id,
        profissional_id:professionalId,
        descricao:description,
        status:"solicitado"
    });

    if(error){
        openModal(`
            <h2>Não foi possível solicitar</h2>
            <div class="notice">${escapeHtml(error.message)}</div>
        `);
        return;
    }

    openModal(`
        <div class="success-icon">✓</div>

        <h2>Solicitação enviada!</h2>

        <p>O profissional recebeu sua solicitação.</p>

        <button class="btn btn-primary" style="width:100%" onclick="closeModal()">
            Concluir
        </button>
    `);
}

function analyzeApplication(id){
    openModal(`
        <h2>Análise do profissional</h2>

        <p>
            As candidaturas reais ficam protegidas pelo RLS
            e serão carregadas do banco quando o módulo
            administrativo seguro estiver conectado.
        </p>

        <div class="notice">
            A aprovação definitiva deve ocorrer no backend/Edge Function,
            nunca por localStorage.
        </div>

        <button class="btn btn-primary" style="width:100%" onclick="closeModal()">
            Entendi
        </button>
    `);
}

async function adminPage(page,el){
    document.querySelectorAll(".side-btn")
        .forEach(x=>x.classList.remove("active"));

    if(el)el.classList.add("active");

    const c=document.getElementById("adminContent");

    if(page==="dashboard"){
        c.innerHTML=`
            <h2>Visão geral</h2>
            <p style="color:#718078">
                Painel administrativo da ResolveJá.
            </p>

            <div class="cards">
                <div class="metric">
                    <small>Banco</small>
                    <strong>Online</strong>
                </div>

                <div class="metric">
                    <small>RLS</small>
                    <strong>Ativo</strong>
                </div>

                <div class="metric">
                    <small>Verificação</small>
                    <strong>5 referências</strong>
                </div>

                <div class="metric">
                    <small>Avaliações</small>
                    <strong>1–10</strong>
                </div>
            </div>
        `;
    }

    else if(page==="analyses"){
        c.innerHTML=`
            <h2>Análises</h2>

            <p style="color:#718078">
                As candidaturas reais serão exibidas aqui após
                a criação do módulo administrativo seguro.
            </p>

            <div class="panel">
                <h3>Fila de verificação</h3>
                <p>
                    O ADM precisa validar as 5 referências antes
                    de alterar o status para aprovado.
                </p>
            </div>
        `;
    }

    else if(page==="professionals"){
        c.innerHTML=`
            <h2>Profissionais</h2>

            <div class="panel">
                <p>
                    Profissionais aprovados e verificados.
                </p>
            </div>
        `;
    }

    else if(page==="users"){
        c.innerHTML=`
            <h2>Usuários</h2>

            <div class="panel">
                <p>
                    Gerenciamento de contas de clientes.
                </p>
            </div>
        `;
    }

    else if(page==="reports"){
        c.innerHTML=`
            <h2>Denúncias</h2>

            <div class="panel">
                <p>
                    Denúncias aguardando revisão.
                </p>
            </div>
        `;
    }

    else if(page==="logs"){
        c.innerHTML=`
            <h2>Registros</h2>

            <div class="panel">
                <p>
                    Auditoria administrativa protegida por RLS.
                </p>
            </div>
        `;
    }

    else if(page==="admins"){
        c.innerHTML=`
            <h2>Administradores</h2>

            <div class="panel">
                <p>
                    Somente a Conta Mestre deve criar administradores
                    por operação administrativa segura.
                </p>
            </div>
        `;
    }

    else{
        c.innerHTML=`
            <h2>Configurações</h2>

            <div class="panel">
                <p>
                    Configurações da plataforma e da conta.
                </p>
            </div>
        `;
    }
}

async function boot(){
    renderServices();
    await renderPros();

    document.querySelectorAll(".auth-only")
        .forEach(x=>x.style.display="none");

    if(!sb)return;

    const {data:{session}}=await sb.auth.getSession();

    if(session?.user){
        await routeAuthenticatedUser(session.user);
    }

    sb.auth.onAuthStateChange((event,session)=>{
        if(event==="SIGNED_OUT"){
            logout();
        }
    });
}

document.getElementById("loginBtn").onclick=login;
document.getElementById("logoutBtn").onclick=logout;

document.querySelectorAll(".nav-link").forEach(b=>{
    b.onclick=()=>{
        if(b.classList.contains("auth-only")&&!sb)return;
        showPage(b.dataset.page);
    };
});

boot();

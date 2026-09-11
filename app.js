const categories = [
["🔧","Mecânico","Mecânica automotiva"],["⚡","Eletricista","Instalações elétricas"],["🚿","Encanador","Água e hidráulica"],["🎨","Pintor","Pintura residencial"],["🧱","Pedreiro","Obras e reformas"],["🪚","Marceneiro","Móveis e madeira"],["❄️","Técnico de ar-condicionado","Climatização"],["🧹","Diarista","Limpeza residencial"],["🌳","Jardineiro","Jardinagem"],["💻","Técnico de informática","Computadores"],["📱","Técnico de celular","Celulares e tablets"],["🔑","Chaveiro","Chaves e fechaduras"],["🚗","Lavador automotivo","Estética automotiva"],["📦","Montador de móveis","Montagem"],["🧺","Lavanderia","Lavagem de roupas"],["🐕","Adestrador","Animais"],["🐈","Pet sitter","Cuidados com pets"],["📸","Fotógrafo","Fotografia"],["🎥","Videomaker","Vídeos"],["💇","Cabeleireiro","Beleza"],["💅","Manicure","Unhas"],["💄","Maquiador","Maquiagem"],["🧵","Costureiro","Costura e ajustes"],["👟","Sapateiro","Calçados"],["📚","Professor particular","Aulas"],["🗣️","Professor de idiomas","Idiomas"],["🎸","Professor de música","Música"],["🏋️","Personal trainer","Fitness"],["🧘","Instrutor de yoga","Bem-estar"],["📋","Contador","Contabilidade"],["⚖️","Advogado","Serviços jurídicos"],["🏠","Corretor de imóveis","Imóveis"],["📐","Arquiteto","Arquitetura"],["🧮","Engenheiro","Engenharia"],["🪟","Vidraceiro","Vidros"],["🏗️","Serralheiro","Metalurgia"],["🛋️","Tapeceiro","Estofados"],["🧼","Higienização de sofá","Limpeza especializada"],["🪳","Dedetizador","Controle de pragas"],["🚚","Frete e mudanças","Transporte"],["🛵","Entregador","Entregas"],["🖨️","Técnico de impressora","Impressoras"],["📡","Técnico de internet","Redes"],["📺","Técnico de TV","Eletrônicos"],["🔌","Instalador de tomadas","Elétrica"],["💡","Instalador de iluminação","Iluminação"],["🔨","Montador","Montagens gerais"],["🏊","Manutenção de piscina","Piscinas"],["🧯","Técnico de segurança","Segurança"],["🔋","Técnico de bateria","Baterias"],["🚲","Mecânico de bicicletas","Bicicletas"],["🏍️","Mecânico de motos","Motocicletas"],["🚘","Funileiro","Funilaria"],["🛞","Borracheiro","Pneus"],["🧑‍🍳","Cozinheiro","Culinária"],["🍰","Confeiteiro","Confeitaria"],["🍽️","Garçom para eventos","Eventos"],["🎉","Organizador de eventos","Eventos"],["💐","Florista","Flores"],["🪴","Paisagista","Paisagismo"],["🧽","Piscineiro","Manutenção"],["🧱","Azulejista","Revestimentos"],["🪜","Gesseiro","Gesso"],["🏠","Telhadista","Telhados"],["🚪","Instalador de portas","Portas"],["🪟","Instalador de janelas","Janelas"],["🧰","Montador industrial","Montagem industrial"],["⚙️","Torneiro mecânico","Usinagem"],["🔩","Soldador","Soldagem"],["🪑","Restaurador de móveis","Restauração"],["🧴","Impermeabilizador","Impermeabilização"],["🧯","Extintores","Manutenção"],["🔒","Instalador de câmeras","CFTV"],["🚨","Alarmes","Segurança eletrônica"],["📶","Instalador de antena","Antenas"],["🎮","Técnico de videogame","Consoles"],["🖥️","Técnico de notebook","Notebooks"],["⌨️","Montador de PC","Computadores"],["🌐","Desenvolvedor web","Sites"],["🎨","Designer gráfico","Design"],["✍️","Redator","Textos"],["📣","Social media","Redes sociais"],["📊","Analista de dados","Dados"],["📸","Editor de fotos","Edição"],["🎬","Editor de vídeo","Edição de vídeo"],["🎧","DJ","Eventos"],["🎤","Cantor","Música"],["🎹","Pianista","Música"],["🎻","Músico","Música"],["🎭","Ator","Arte"],["🖌️","Ilustrador","Arte"],["🧑‍🎨","Artista","Arte"],["🧠","Psicopedagogo","Educação"],["👶","Babá","Cuidados infantis"],["🧓","Cuidador de idosos","Cuidados"],["♿","Cuidador especializado","Acompanhamento"],["🐶","Passeador de cães","Pets"],["🐾","Banho e tosa","Pets"],["🌱","Cuidador de plantas","Plantas"],["🏡","Caseiro","Residências"],["🧹","Limpeza pós-obra","Limpeza"],["🪣","Lavador de caixa d'água","Higienização"],["🧴","Limpeza de piscina","Piscinas"],["🪑","Montagem de escritório","Móveis"],["📦","Empacotador","Mudanças"],["🚛","Transportador","Transporte"],["🚐","Motorista particular","Transporte"],["🚕","Motorista para eventos","Transporte"],["📑","Despachante","Documentação"],["📝","Digitador","Serviços digitais"],["🖥️","Assistência remota","Tecnologia"],["🔧","Manutenção geral","Manutenção"],["🏚️","Reforma residencial","Reformas"],["🏢","Manutenção predial","Predial"],["🏬","Manutenção comercial","Comercial"],["💧","Limpeza de caixa d'água","Higienização"],["🧹","Limpeza comercial","Limpeza"],["🪟","Limpeza de vidros","Limpeza"],["🧽","Limpeza de estofados","Limpeza"],["🚿","Desentupidor","Hidráulica"],["🔥","Técnico de gás","Gás"],["☀️","Instalador solar","Energia solar"],["🔋","Eletricista automotivo","Automotiva"],["🚘","Polimento automotivo","Automotiva"],["✨","Martelinho de ouro","Automotiva"],["🛠️","Guincho","Automotiva"],["🚙","Inspeção veicular","Automotiva"],["🏍️","Entregas de moto","Transporte"],["📦","Montador de estruturas","Montagem"],["🎪","Montador de eventos","Eventos"],["💡","Iluminador de eventos","Eventos"],["🌐","Instalador de rede","Tecnologia"],["🔐","Especialista em segurança digital","Tecnologia"],["🧾","Consultor financeiro","Finanças"],["💼","Consultor empresarial","Negócios"],["📢","Consultor de marketing","Marketing"],["🧑‍💻","Suporte técnico","Tecnologia"],["📖","Professor de reforço","Educação"],["🎓","Orientador acadêmico","Educação"],["🧒","Recreador infantil","Eventos"],["🎂","Decorador de festas","Eventos"],["💐","Decorador","Decoração"],["🏠","Designer de interiores","Interiores"],["🧱","Designer de móveis","Móveis"],["🌿","Podador de árvores","Jardinagem"],["🌾","Paisagista residencial","Jardinagem"],["🐝","Apicultor","Serviços rurais"],["🌾","Serviços rurais","Campo"],["🚜","Operador de máquinas","Máquinas"],["🔧","Manutenção de máquinas","Máquinas"],["🧰","Manutenção industrial","Industrial"],["⚙️","Mecânico industrial","Industrial"],["🧪","Técnico de laboratório","Laboratório"],["📡","Técnico em eletrônica","Eletrônica"],["🔬","Técnico especializado","Técnico"],["🩹","Enfermeiro particular","Cuidados"],["💆","Massoterapeuta","Bem-estar"],["💇","Barbeiro","Beleza"],["🧖","Esteticista","Estética"],["💍","Joalheiro","Joias"],["⌚","Relojoeiro","Relógios"],["🎹","Afinador de instrumentos","Música"],["📦","Personal organizer","Organização"],["🧺","Passadeira","Roupas"],["🧹","Auxiliar doméstico","Casa"],["🧑‍🌾","Hortelão","Jardinagem"],["🐴","Cuidador de cavalos","Animais"],["📷","Fotógrafo de eventos","Fotografia"],["💒","Fotógrafo de casamento","Fotografia"],["💻","Criador de sistemas","Tecnologia"],["🤖","Automação","Tecnologia"],["🖨️","Impressão 3D","Tecnologia"],["🎁","Personalização de presentes","Artesanato"],["🧶","Artesão","Artesanato"],["🕯️","Fabricante de velas","Artesanato"],["🪵","Entalhador","Artesanato"],["🧑‍🔧","Técnico geral","Manutenção"],["📋","Consultor","Consultoria"],["🔍","Perito","Análise"],["🗺️","Guia turístico","Turismo"],["✈️","Consultor de viagens","Turismo"],["🏕️","Organizador de acampamento","Turismo"],["🎯","Instrutor","Treinamento"],["🗣️","Palestrante","Eventos"],["🧑‍🏫","Instrutor profissional","Cursos"]
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
function renderClientCategories(){
    const grid=document.getElementById("clientCategoryGrid");
    if(!grid)return;
    grid.innerHTML=categories.slice(0,12).map(c=>`<button class="mini-category" onclick="openProfessionals('${c[1].replace(/'/g,"\\'")}')"><span>${c[0]}</span><b>${escapeHtml(c[1])}</b></button>`).join("");
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
    if(cat && cat!=="Profissionais disponíveis")list=list.filter(p=>String(p.profissao||"").toLowerCase().includes(cat.toLowerCase()));
    if(!list.length){grid.innerHTML=`<div class="panel"><h3>Nenhum profissional encontrado</h3><p>Não encontramos profissionais aprovados nessa categoria ainda.</p></div>`;return;}
    grid.innerHTML=list.map(p=>{
        const initials=(p.nome||"RJ").split(/\s+/).slice(0,2).map(x=>x[0]).join("").toUpperCase();
        const rating=p.rating||"—";
        const jobs=p.jobs||0;
        return `<article class="pro-card"><div class="pro-top"><div class="avatar">${p.initials||initials}</div><div><h3>${escapeHtml(p.nome)}</h3><div class="role">${escapeHtml(p.profissao||"")} • ${escapeHtml(p.cidade||"")}${p.estado?" - "+escapeHtml(p.estado):""}</div></div><span class="verified">✓</span></div><div class="rating">★★★★★ <span>${rating}</span></div><p>${escapeHtml(p.descricao||"Profissional verificado pela ResolveJá.")}</p><div class="chips">${(p.tags||[]).map(t=>`<span class="chip">${escapeHtml(t)}</span>`).join("")}</div><button class="btn btn-primary" style="width:100%;margin-top:15px" onclick="contactPro('${p.id||""}','${String(p.nome||"").replace(/'/g,"\\'")}')">Ver perfil</button></article>`;
    }).join("");
}
function escapeHtml(v){return String(v??"").replace(/[&<>'"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[c]));}
function openProfessionals(cat){showPage("professionals");document.getElementById("proTitle").textContent=cat+" — profissionais";renderPros(cat);}
async function contactPro(id,name){
    if(!sb||!id){
        openModal(`<h2>${escapeHtml(name)}</h2><p>Este perfil não está disponível no banco de dados.</p><button class="btn btn-primary" style="width:100%" onclick="closeModal()">Fechar</button>`);return;
    }
    const {data,error}=await sb.from("profissionais").select("id,nome,cidade,estado,profissao,experiencia,descricao,verificado,status").eq("id",id).single();
    if(error||!data){openModal(`<h2>Não foi possível abrir o perfil</h2><div class="notice">Tente novamente.</div>`);return;}
    openModal(`<h2>${escapeHtml(data.nome)}</h2><p><b>${escapeHtml(data.profissao)}</b> • ${escapeHtml(data.cidade||"")}${data.estado?" - "+escapeHtml(data.estado):""}</p><p>${escapeHtml(data.descricao||"Sem descrição.")}</p><p><b>Experiência:</b> ${escapeHtml(data.experiencia||"Não informado")}</p><div class="notice">🛡️ Para sua segurança, telefone, WhatsApp, @usuários e contatos externos não podem ser compartilhados pelo chat.</div><button class="btn btn-primary" style="width:100%" onclick="requestService('${data.id}')">Solicitar serviço</button><button class="btn btn-outline" style="width:100%;margin-top:8px" onclick="openChat('${data.id}','${String(data.nome||"").replace(/'/g,"\'")}')">Enviar mensagem</button>`);
}

function normalizeDigits(v){return String(v||"").replace(/\D/g,"");}
function looksLikeFakeNumber(v){
    let d=normalizeDigits(v);
    if(d.startsWith("55")&&d.length===13)d=d.slice(2);
    if(!d)return false;
    if(/^([0-9])\1+$/.test(d))return true;
    if(d.length>=6 && /^(0123456789|1234567890|9876543210)$/.test(d))return true;
    if(d.length>=6 && (d.length===6||d.length===7||d.length===8||d.length===9||d.length===10||d.length===11) && /^0+$/.test(d))return true;
    return false;
}
function isValidBrazilPhone(v){
    let d=normalizeDigits(v);
    if(d.startsWith("55")&&d.length===13)d=d.slice(2);
    return d.length===10||d.length===11;
}
function isValidCep(v){
    const d=normalizeDigits(v);
    return d.length===8&&!looksLikeFakeNumber(d);
}
function hasContactAttempt(text){
    const raw=String(text||"").toLowerCase();
    const compact=raw.replace(/[^a-z0-9]/g,"");
    const digits=raw.replace(/\D/g,"");
    const spacedDigits=raw.replace(/[^0-9]/g,"");
    const contactWords=/\b(whatsapp|whats|zap|wpp|wa\.me|telegram|insta|instagram|facebook|tiktok)\b/i.test(raw);
    const handle=/@[a-z0-9_.-]{3,}/i.test(raw);
    const phonePattern=/(?:\+?55\s*)?(?:\(?\d{2}\)?\s*)?9?\s*\d{4}\s*[-. ]?\s*\d{4}/.test(raw);
    const longDigits=digits.length>=6;
    const repeated=spacedDigits.length>=6 && /^(\d)\1{5,}$/.test(spacedDigits);
    const separatedDigits=(raw.match(/\d/g)||[]).length>=6 && /(?:\d\s*){6,}/.test(raw);
    const writtenNumbers=/(cinco|seis|sete|oito|nove|zero|um|dois|tr[eê]s|quatro)(?:\s+(?:cinco|seis|sete|oito|nove|zero|um|dois|tr[eê]s|quatro)){5,}/i.test(raw);
    return contactWords||handle||phonePattern||longDigits||repeated||separatedDigits||writtenNumbers;
}
async function reportContactAttempt(text,conversationId=null){
    if(!sb)return;
    const {data:{user}}=await sb.auth.getUser();
    if(!user)return;
    await sb.rpc("registrar_tentativa_contato_resolveja",{p_conversa_id:conversationId,p_conteudo:String(text).slice(0,1000)});
}
async function sendSecureMessage(conversationId,text){
    const clean=String(text||"").trim();
    if(!clean)return {error:{message:"Digite uma mensagem."},blocked:false};
    if(hasContactAttempt(clean)){
        await reportContactAttempt(clean,conversationId);
        return {blocked:true,error:{message:"Mensagem bloqueada. A tentativa de compartilhar telefone, WhatsApp, usuário ou outro contato externo foi registrada para análise da equipe."}};
    }
    const {data,error}=await sb.from("mensagens").insert({conversa_id:conversationId,remetente_id:(await sb.auth.getUser()).data.user.id,conteudo:clean});
    return {data,error,blocked:false};
}

function openModal(content){document.getElementById("modalContent").innerHTML=content;document.getElementById("modal").classList.remove("hidden")}
function closeModal(){document.getElementById("modal").classList.add("hidden")}
function requireBackend(){if(!supabaseReady){openModal(`<h2>Conecte o Supabase</h2><p>Abra <b>config.js</b> e coloque a URL e a chave publishable do seu projeto Supabase.</p><div class="notice">Nunca coloque a chave service_role no site.</div><button class="btn btn-primary" style="width:100%" onclick="closeModal()">Entendi</button>`);return false}return true}
let pendingClientSignup=null;
let pendingProfessionalSignup=null;

function markField(id,valid){const el=document.getElementById(id);if(!el)return;el.classList.toggle("field-invalid",!valid);el.classList.toggle("field-valid",valid);}
function onlyLettersValue(value){return /^[A-Za-zÀ-ÿ\s.'-]+$/.test(String(value||"").trim());}
function onlyNumberValue(value){return /^\d+$/.test(String(value||"").replace(/\s/g,""));}
function maskBrazilPhone(value){let d=String(value||"").replace(/\D/g,"").slice(0,13);if(d.startsWith("55"))d=d.slice(2);d=d.slice(0,11);let out="+55 ";if(d.length){out+=d.slice(0,2);if(d.length>=2)out+=" ";}if(d.length>2){out+=d.slice(2,3);if(d.length>=3)out+=" ";}if(d.length>3){out+=d.slice(3,7);if(d.length>=7)out+="-";}if(d.length>7)out+=d.slice(7,11);return out;}
function wireProfessionalFieldRules(){
 const textIds=["proName","proCity","proState","proJob","ref1Name","ref2Name","ref3Name","ref4Name","ref5Name"];
 const numericIds=["proBirth","proExperienceYears"];
 textIds.forEach(id=>{const el=document.getElementById(id);if(!el)return;el.addEventListener("input",()=>{if(id==="proState")el.value=el.value.replace(/[^A-Za-zÀ-ÿ]/g,"").slice(0,2).toUpperCase();else el.value=el.value.replace(/[0-9]/g,"");markField(id,el.value.trim()!==""&&onlyLettersValue(el.value));});});
 ["proPhone","ref1Phone","ref2Phone","ref3Phone","ref4Phone","ref5Phone"].forEach(id=>{const el=document.getElementById(id);if(!el)return;el.setAttribute("inputmode","tel");el.setAttribute("maxlength","18");el.addEventListener("input",()=>{el.value=maskBrazilPhone(el.value);markField(id,isValidBrazilPhone(el.value));});});
 const cep=document.getElementById("proCep");if(cep){cep.addEventListener("input",()=>{cep.value=cep.value.replace(/\D/g,"").slice(0,8).replace(/^(\d{5})(\d)/,"$1-$2");markField("proCep",isValidCep(cep.value));if(cep.value.replace(/\D/g,"").length===8)lookupCep(cep.value);});}
 const state=document.getElementById("proState");if(state)state.addEventListener("input",()=>markField("proState",/^[A-Z]{2}$/.test(state.value)));
 ["proExperience","proNumber"].forEach(id=>{const el=document.getElementById(id);if(!el)return;el.addEventListener("input",()=>{el.value=el.value.replace(/\D/g,"");markField(id,el.value.trim()!=="");});});
}
async function lookupCep(value){const cep=String(value).replace(/\D/g,"");if(cep.length!==8)return;const status=document.getElementById("cepStatus");try{if(status)status.textContent="Buscando endereço...";const r=await fetch(`https://viacep.com.br/ws/${cep}/json/`);const data=await r.json();if(data.erro){markField("proCep",false);if(status)status.textContent="CEP não encontrado.";return;}const address=document.getElementById("proAddress"),city=document.getElementById("proCity"),state=document.getElementById("proState"),district=document.getElementById("proDistrict");if(address)address.value=data.logradouro||"";if(district)district.value=data.bairro||"";if(city)city.value=data.localidade||"";if(state)state.value=data.uf||"";markField("proCep",true);markField("proCity",!!data.localidade);markField("proState",!!data.uf);if(status)status.textContent=`Endereço encontrado: ${data.logradouro||""}${data.bairro?`, ${data.bairro}`:""} — ${data.localidade||""}/${data.uf||""}`;}catch(err){if(status)status.textContent="Não foi possível consultar o CEP agora. Tente novamente.";}}
function validateProfessionalFields(values){let ok=true;const required=["proName","proPhone","proEmail","proPass","proBirth","proCep","proCity","proState","proJob","proExperience","proDescription","proAddress","proNumber","proDistrict"];required.forEach(id=>{const el=document.getElementById(id);const valid=!!el&&String(el.value||"").trim()!=="";markField(id,valid);if(!valid)ok=false;});
 if(!isValidBrazilPhone(values.phone)||looksLikeFakeNumber(values.phone)){markField("proPhone",false);ok=false;}else markField("proPhone",true);
 if(!isValidCep(values.cep)){markField("proCep",false);ok=false;}else markField("proCep",true);
 if(!/^[A-Za-zÀ-ÿ]{2}$/.test(values.state)){markField("proState",false);ok=false;}else markField("proState",true);
 ["proName","proCity","proJob"].forEach(id=>{const el=document.getElementById(id);if(el&&!onlyLettersValue(el.value)){markField(id,false);ok=false;}});
 const email=document.getElementById("proEmail");if(email&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())){markField("proEmail",false);ok=false;}else if(email)markField("proEmail",true);const pass=document.getElementById("proPass");if(pass&&pass.value.length<6){markField("proPass",false);ok=false;}else if(pass)markField("proPass",true);const birth=document.getElementById("proBirth");if(birth&&!birth.value){markField("proBirth",false);ok=false;}else if(birth)markField("proBirth",true);const n=document.getElementById("proNumber");if(n&&!/^\d+$/.test(n.value.trim())){markField("proNumber",false);ok=false;}else if(n)markField("proNumber",true);const exp=document.getElementById("proExperience");if(exp&&!/^\d+$/.test(exp.value.trim())){markField("proExperience",false);ok=false;}else if(exp)markField("proExperience",true);
 [1,2,3,4,5].forEach(i=>{const n=document.getElementById(`ref${i}Name`),ph=document.getElementById(`ref${i}Phone`);if(!n||!onlyLettersValue(n.value)||!n.value.trim()){markField(`ref${i}Name`,false);ok=false;}else markField(`ref${i}Name`,true);if(!ph||!isValidBrazilPhone(ph.value)||looksLikeFakeNumber(ph.value)){markField(`ref${i}Phone`,false);ok=false;}else markField(`ref${i}Phone`,true);});
 return ok;}

function openRegister(){openModal(`<h2>Crie sua conta</h2><p>Tenha acesso à busca de profissionais, solicitações e avaliações.</p><div class="form-group"><label>Nome completo</label><input id="clientName" placeholder="Seu nome completo"></div><div class="form-group"><label>E-mail</label><input id="clientEmail" type="email" autocomplete="email" placeholder="seuemail@exemplo.com"></div><div class="form-group"><label>Senha</label><input id="clientPass" type="password" autocomplete="new-password" placeholder="Crie uma senha"></div><div id="registerError" class="notice hidden"></div><button class="btn btn-primary" style="width:100%" onclick="createClientAccount()">Criar minha conta</button><div class="modal-divider">ou</div><button class="btn btn-outline" style="width:100%" onclick="openProfessionalRegister()">Crie uma conta profissional</button>`) }

function openOtpVerification(email,kind){
    const title=kind==="professional"?"Confirme seu e-mail profissional":"Confirme seu e-mail";
    openModal(`<div class="success-icon">✉</div><h2>${title}</h2><p>Enviamos um <b>código de 8 dígitos</b> para <b>${escapeHtml(email)}</b>. Digite o código recebido no Gmail.</p><div class="form-group"><label>Código de confirmação</label><input id="otpCode" inputmode="numeric" autocomplete="one-time-code" maxlength="8" placeholder="00000000"></div><div id="otpError" class="notice hidden"></div><button class="btn btn-primary" style="width:100%" onclick="verifySignupOtp('${kind}')">Confirmar código</button><button class="btn btn-ghost" style="width:100%;margin-top:8px" onclick="resendSignupOtp('${escapeHtml(email)}')">Enviar outro código</button>`);
}

async function createClientAccount(){
    if(!requireBackend())return;
    const name=document.getElementById("clientName").value.trim(),email=document.getElementById("clientEmail").value.trim(),pass=document.getElementById("clientPass").value;
    const e=document.getElementById("registerError");
    if(!name||!email||pass.length<6){e.textContent="Preencha os campos e use uma senha com pelo menos 6 caracteres.";e.classList.remove("hidden");return;}
    pendingClientSignup={name,email,pass};
    const {data,error}=await sb.auth.signUp({email,password:pass,options:{data:{nome:name,tipo:"cliente"}}});
    if(error){pendingClientSignup=null;e.textContent=error.message;e.classList.remove("hidden");return;}
    if(data.user&&data.session){await ensureUserProfile(data.user,name,"cliente");closeModal();enterClient(name);return;}
    openOtpVerification(email,"client");
}

function openProfessionalRegister(){openModal(`<h2>Crie uma conta profissional</h2><p>O cadastro passa por análise antes de aparecer para os clientes.</p><div class="form-group"><label>Nome completo</label><input id="proName" placeholder="Seu nome completo" autocomplete="name"><small class="field-help">Somente letras e espaços.</small></div><div class="form-group"><label>Telefone</label><input id="proPhone" inputmode="tel" maxlength="18" placeholder="+55 00 0 0000-0000"><small class="field-help">Formato obrigatório: +55 00 0 0000-0000</small></div><div class="form-group"><label>E-mail</label><input id="proEmail" type="email" autocomplete="email" placeholder="seuemail@exemplo.com"></div><div class="form-group"><label>Senha</label><input id="proPass" type="password" autocomplete="new-password" placeholder="Crie uma senha"></div><div class="form-group"><label>Data de nascimento</label><input id="proBirth" type="date"></div><div class="form-group"><label>CEP</label><input id="proCep" inputmode="numeric" maxlength="9" placeholder="00000-000"><small id="cepStatus" class="field-help">Digite o CEP para preencher o endereço automaticamente.</small></div><div class="form-group"><label>Endereço</label><input id="proAddress" readonly placeholder="Preenchido automaticamente pelo CEP"></div><div class="form-group"><label>Número</label><input id="proNumber" inputmode="numeric" maxlength="6" placeholder="Ex.: 120"><small class="field-help">Somente números.</small></div><div class="form-group"><label>Bairro</label><input id="proDistrict" readonly placeholder="Preenchido automaticamente pelo CEP"></div><div class="form-group"><label>Cidade</label><input id="proCity" readonly placeholder="Preenchida automaticamente pelo CEP"></div><div class="form-group"><label>Estado</label><input id="proState" maxlength="2" readonly placeholder="UF"></div><div class="form-group"><label>Profissão</label><input id="proJob" placeholder="Ex.: Eletricista"><small class="field-help">Somente letras e espaços.</small></div><div class="form-group"><label>Tempo de experiência (anos)</label><input id="proExperience" type="number" inputmode="numeric" min="0" max="80" step="1" placeholder="Ex.: 5"><small class="field-help">Somente números.</small></div><div class="form-group"><label>Descrição do serviço</label><textarea id="proDescription" rows="3" placeholder="Conte sobre seu trabalho e experiência"></textarea></div>${[1,2,3,4,5].map(i=>`<div class="reference-card"><b>Cliente anterior ${i}</b><div class="form-group"><label>Nome</label><input id="ref${i}Name" placeholder="Nome do cliente"></div><div class="form-group"><label>Telefone</label><input id="ref${i}Phone" inputmode="tel" maxlength="18" placeholder="+55 00 0 0000-0000"><small class="field-help">Formato obrigatório: +55 00 0 0000-0000</small></div></div>`).join("")}<div class="notice">A ResolveJá entrará em contato com as 5 referências. O cadastro só será aprovado após análise da equipe.</div><div id="proRegisterError" class="notice hidden"></div><button class="btn btn-primary" style="width:100%" onclick="submitProfessionalApplication()">Enviar para análise</button>`);wireProfessionalFieldRules();}

async function submitProfessionalApplication(){
    if(!requireBackend())return;
    const get=id=>document.getElementById(id)?.value.trim()||"";
    const values={name:get("proName"),phone:get("proPhone"),email:get("proEmail"),pass:document.getElementById("proPass")?.value||"",birth:get("proBirth"),cep:get("proCep"),address:get("proAddress"),number:get("proNumber"),district:get("proDistrict"),city:get("proCity"),state:get("proState").toUpperCase(),job:get("proJob"),experience:get("proExperience")+" anos",description:get("proDescription")};
    const e=document.getElementById("proRegisterError");
    if(!validateProfessionalFields(values)||values.pass.length<6){e.textContent="Corrija os campos destacados em vermelho. O telefone deve seguir +55 00 0 0000-0000 e os campos de texto não aceitam números.";e.classList.remove("hidden");return;}
    const refs=[];for(let i=1;i<=5;i++){const name=get(`ref${i}Name`),phone=get(`ref${i}Phone`);if(!name||!phone){e.textContent=`Preencha o nome e telefone da referência ${i}.`;e.classList.remove("hidden");return;}refs.push({nome:name,telefone:phone,ordem:i,contato_verificado:false});}
    pendingProfessionalSignup={values,refs};
    const {data,error}=await sb.auth.signUp({email:values.email,password:values.pass,options:{data:{nome:values.name,tipo:"profissional"}}});
    if(error){pendingProfessionalSignup=null;e.textContent=error.message;e.classList.remove("hidden");return;}
    if(data.session){await finishProfessionalSignup(data.user);return;}
    openOtpVerification(values.email,"professional");
}

async function verifySignupOtp(kind){
    const code=document.getElementById("otpCode")?.value.trim();
    const e=document.getElementById("otpError");
    const pending=kind==="professional"?pendingProfessionalSignup:pendingClientSignup;
    if(!pending){e.textContent="Esta confirmação expirou. Recomece o cadastro.";e.classList.remove("hidden");return;}
    const email=kind==="professional"?pending.values.email:pending.email;
    if(!/^\d{8}$/.test(code)){e.textContent="Digite o código de 8 dígitos recebido no Gmail.";e.classList.remove("hidden");return;}
    const {data,error}=await sb.auth.verifyOtp({email,token:code,type:kind==="professional"||kind==="client"?"signup":"email"});
    if(error){e.textContent="Código inválido ou expirado. Solicite outro código e tente novamente.";e.classList.remove("hidden");return;}
    if(kind==="professional") await finishProfessionalSignup(data.user);
    else {await ensureUserProfile(data.user,pending.name,"cliente");pendingClientSignup=null;closeModal();enterClient(pending.name);}
}

async function resendSignupOtp(email){
    const {error}=await sb.auth.resend({type:"signup",email});
    const e=document.getElementById("otpError");
    if(error){e.textContent=error.message;e.classList.remove("hidden");return;}
    e.textContent="Novo código enviado. Verifique o Gmail.";e.classList.remove("hidden");
}

async function finishProfessionalSignup(user){
    const pending=pendingProfessionalSignup;
    if(!pending)return;
    const v=pending.values;
    const profile=await ensureUserProfile(user,v.name,"profissional",v.phone,v.city,v.state);
    if(profile.error){const e=document.getElementById("otpError")||document.getElementById("proRegisterError");e.textContent=profile.error.message;e.classList.remove("hidden");return;}
    const {data:pro,error:proError}=await sb.from("profissionais").insert({usuario_id:user.id,nome:v.name,telefone:v.phone,email:v.email,data_nascimento:v.birth,cidade:v.city,estado:v.state,cep:v.cep,profissao:v.job,experiencia:v.experience,descricao:v.description,endereco:v.address,numero:v.number,bairro:v.district,status:"pendente",verificado:false}).select().single();
    if(proError){const e=document.getElementById("otpError")||document.getElementById("proRegisterError");e.textContent=proError.message;e.classList.remove("hidden");return;}
    const refs=pending.refs.map(r=>({...r,profissional_id:pro.id}));
    const {error:refError}=await sb.from("referencias").insert(refs);
    if(refError){const e=document.getElementById("otpError")||document.getElementById("proRegisterError");e.textContent=refError.message;e.classList.remove("hidden");return;}
    pendingProfessionalSignup=null;
    closeModal();openModal(`<div class="success-icon">✓</div><h2>Cadastro enviado!</h2><p>Seu cadastro foi enviado para análise. A equipe verificará suas 5 referências antes da aprovação.</p><div class="notice">Você só aparecerá como profissional após a aprovação.</div><button class="btn btn-primary" style="width:100%" onclick="closeModal()">Concluir</button>`);
}
async function ensureUserProfile(user,name,tipo,telefone="",cidade="",estado=""){
    const {data,error}=await sb.from("usuarios").upsert({id:user.id,nome:name,email:user.email||"",telefone,cidade,estado,tipo,status:"ativo"},{onConflict:"id"}).select().single();
    return {data,error};
}
function login(){openModal(`<div class="login-modal-head"><div class="success-icon">✉</div><h2>Entrar na ResolveJá</h2><p>Digite seu Gmail e nós enviaremos um código de acesso.</p></div><div class="form-group"><label>E-mail</label><input id="loginUser" type="email" autocomplete="email" placeholder="seuemail@exemplo.com"></div><div id="loginError" class="notice hidden"></div><button class="btn btn-primary" style="width:100%" onclick="sendLoginCode()">Enviar código</button><div class="modal-divider">Ainda não tem conta?</div><button class="btn btn-outline" style="width:100%" onclick="openRegister()">Crie sua conta</button>`)}
async function sendLoginCode(){
    if(!requireBackend())return;
    const email=document.getElementById("loginUser")?.value.trim();
    const e=document.getElementById("loginError");
    if(!email){e.textContent="Digite seu e-mail.";e.classList.remove("hidden");return;}
    const {error}=await sb.auth.signInWithOtp({email,options:{shouldCreateUser:false}});
    if(error){e.textContent="Não foi possível enviar o código. Verifique se este e-mail já possui uma conta.";e.classList.remove("hidden");return;}
    openLoginOtp(email);
}
function openLoginOtp(email){
    openModal(`<div class="success-icon">✉</div><h2>Código enviado</h2><p>Enviamos um <b>código de 8 dígitos</b> para <b>${escapeHtml(email)}</b>. Verifique o Gmail.</p><div class="form-group"><label>Código</label><input id="loginOtpCode" inputmode="numeric" autocomplete="one-time-code" maxlength="8" placeholder="00000000"></div><div id="loginOtpError" class="notice hidden"></div><button class="btn btn-primary" style="width:100%" onclick="verifyLoginCode('${escapeHtml(email)}')">Entrar</button><button class="btn btn-ghost" style="width:100%;margin-top:8px" onclick="sendLoginCodeAgain('${escapeHtml(email)}')">Enviar outro código</button>`);
}
async function verifyLoginCode(email){
    const code=document.getElementById("loginOtpCode")?.value.trim();
    const e=document.getElementById("loginOtpError");
    if(!/^\d{8}$/.test(code)){e.textContent="Digite os 8 dígitos do código.";e.classList.remove("hidden");return;}
    const {data,error}=await sb.auth.verifyOtp({email,token:code,type:"email"});
    if(error){e.textContent="Código inválido ou expirado.";e.classList.remove("hidden");return;}
    await routeAuthenticatedUser(data.user);
}
async function sendLoginCodeAgain(email){
    const {error}=await sb.auth.signInWithOtp({email,options:{shouldCreateUser:false}});
    const e=document.getElementById("loginOtpError");
    if(error){e.textContent=error.message;e.classList.remove("hidden");return;}
    e.textContent="Novo código enviado. Verifique o Gmail.";e.classList.remove("hidden");
}
async function routeAuthenticatedUser(user){
    const {data:admin}=await sb.from("administradores").select("cargo,ativo").eq("usuario_id",user.id).eq("ativo",true).maybeSingle();
    closeModal();
    if(admin){const isMaster=String(admin.cargo||"").toLowerCase()==="master";window.resolveJaIsAdmin=true;enterAdmin(isMaster);return;}
    const {data:account}=await sb.from("usuarios").select("status,punicao_expira_em,motivo_punicao").eq("id",user.id).maybeSingle();
    if(account?.status==="punido") {
        const expires=account.punicao_expira_em?new Date(account.punicao_expira_em):null;
        if(!expires || expires>new Date()){
            await sb.auth.signOut();
            openModal(`<h2>Conta temporariamente bloqueada</h2><div class="notice">${escapeHtml(account.motivo_punicao||"Sua conta foi punida pela equipe da ResolveJá.")}${expires?`<br>Até: ${expires.toLocaleString("pt-BR")}`:"<br>Bloqueio permanente."}</div><button class="btn btn-primary" style="width:100%" onclick="closeModal()">Entendi</button>`);
            return;
        }
    }
    window.resolveJaIsAdmin=false;
    const {data:professional}=await sb.from("profissionais").select("id,nome,status,verificado,profissao").eq("usuario_id",user.id).maybeSingle();
    if(professional){
        window.resolveJaProfessional=professional;
        enterProfessional(professional);
        return;
    }
    window.resolveJaProfessional=null;
    const {data:profile}=await sb.from("usuarios").select("nome,tipo").eq("id",user.id).maybeSingle();
    enterClient(profile?.nome||user.user_metadata?.nome||user.email?.split("@")[0]||"Cliente");
}
function enterClient(name){
    window.resolveJaProfessional=null;
    document.getElementById("publicNav").classList.add("hidden");
    document.getElementById("userNav").classList.remove("hidden");

    document.getElementById("welcome").textContent=
        "Olá, "+String(name).split(" ")[0]+"!";

    document.querySelectorAll(".auth-only")
        .forEach(x=>x.style.display="");

    document.querySelectorAll(".master-only")
        .forEach(x=>x.style.display="none");

    const clientLinks=document.querySelectorAll(".client-only");
    clientLinks.forEach(x=>x.style.display="");

    showPage("clientHome");
    renderClientCategories();
    loadClientHome();
}

async function loadClientHome(){
    const welcome=document.getElementById("clientWelcome");
    const userInfo=document.getElementById("clientUserInfo");
    if(!sb||!welcome)return;
    const {data:{user}}=await sb.auth.getUser();
    if(!user)return;
    const {data:profile}=await sb.from("usuarios").select("nome,cidade,estado,tipo").eq("id",user.id).maybeSingle();
    const name=profile?.nome||user.user_metadata?.nome||user.email?.split("@")[0]||"Cliente";
    welcome.textContent="Olá, "+name.split(" ")[0]+" 👋";
    if(userInfo)userInfo.innerHTML=`<b>${escapeHtml(name)}</b><span>${escapeHtml(user.email||"")}</span>${profile?.cidade?`<span>📍 ${escapeHtml(profile.cidade)}${profile.estado?", "+escapeHtml(profile.estado):""}</span>`:""}`;
}

function openClientSettings(){
    showPage("clientSettings");
    loadClientSettings();
}

async function loadClientSettings(){
    if(!sb)return;
    const {data:{user}}=await sb.auth.getUser();
    if(!user)return;
    const {data:p}=await sb.from("usuarios").select("nome,telefone,cidade,estado").eq("id",user.id).maybeSingle();
    document.getElementById("settingsName").value=p?.nome||user.user_metadata?.nome||"";
    document.getElementById("settingsPhone").value=p?.telefone||"";
    document.getElementById("settingsCity").value=p?.cidade||"";
    document.getElementById("settingsState").value=p?.estado||"";
    document.getElementById("settingsEmail").value=user.email||"";
}

async function saveClientSettings(){
    if(!sb)return;
    const {data:{user}}=await sb.auth.getUser();
    if(!user)return;
    const name=document.getElementById("settingsName").value.trim();
    const city=document.getElementById("settingsCity").value.trim();
    const state=document.getElementById("settingsState").value.trim().toUpperCase();
    if(!name){showNotice("settingsNotice","Informe seu nome.");return;}
    if(city && (!/[A-Za-zÀ-ÿ]/.test(city)||/^[0-9\s-]+$/.test(city))){showNotice("settingsNotice","Informe uma cidade válida.");return;}
    const {error}=await sb.from("usuarios").upsert({id:user.id,nome:name,cidade:city,estado:state,tipo:"cliente"},{onConflict:"id"});
    if(error){showNotice("settingsNotice",error.message);return;}
    showNotice("settingsNotice","Dados salvos com sucesso.",true);
    document.getElementById("welcome").textContent="Olá, "+name.split(" ")[0]+"!";
    loadClientHome();
}

function showNotice(id,text,success=false){
    const el=document.getElementById(id);
    if(!el)return;
    el.textContent=text;
    el.classList.remove("hidden");
    el.style.background=success?"#e8f8ed":"";
    el.style.color=success?"#176b36":"";
}

function enterAdmin(master){
    document.getElementById("publicNav").classList.add("hidden");
    document.getElementById("userNav").classList.add("hidden");
    document.querySelectorAll(".client-only").forEach(x=>x.style.display="none");
    document.querySelectorAll(".master-only").forEach(x=>x.style.display=master?"block":"none");
    window.resolveJaIsMaster=master;
    showPage("admin");
    adminPage("dashboard",document.querySelector(".side-btn"));
}
function resetLoggedOut(){
    window.resolveJaProfessional=null;
    document.getElementById("professionalOnly")?.classList.add("hidden");
    document.getElementById("userNav")?.classList.add("hidden");
    document.getElementById("publicNav")?.classList.remove("hidden");
    document.querySelectorAll(".auth-only,.client-only").forEach(x=>x.style.display="none");
    document.querySelectorAll(".master-only").forEach(x=>x.style.display="none");
    window.resolveJaIsMaster=false;
    showPage("home");
}
async function logout(){
    if(sb){const {error}=await sb.auth.signOut(); if(error){console.error(error);}}
    resetLoggedOut();
}
async function requestService(professionalId){
    if(!sb){requireBackend();return;}
    const {data:{user}}=await sb.auth.getUser();
    if(!user){closeModal();login();return;}
    const {data:pro}=await sb.from("profissionais").select("id,usuario_id,nome,status,verificado").eq("id",professionalId).single();
    if(!pro){openModal(`<h2>Profissional não encontrado</h2><div class="notice">Tente novamente.</div>`);return;}
    if(pro.usuario_id===user.id){
        openModal(`<h2>Você não pode solicitar este serviço</h2><div class="notice">Um profissional não pode contratar ou solicitar um serviço dele mesmo.</div><button class="btn btn-primary" style="width:100%" onclick="closeModal()">Entendi</button>`);
        return;
    }
    const description=prompt("Descreva o serviço que você precisa:");
    if(description===null)return;
    if(!description.trim()){openModal(`<h2>Descreva o serviço</h2><div class="notice">Informe o que você precisa antes de enviar.</div>`);return;}
    const {data:service,error}=await sb.from("servicos").insert({cliente_id:user.id,profissional_id:professionalId,descricao:description.trim(),status:"solicitado"}).select("id").single();
    if(error){openModal(`<h2>Não foi possível solicitar</h2><div class="notice">${escapeHtml(error.message)}</div>`);return;}
    await ensureConversation(user.id,professionalId);
    openModal(`<div class="success-icon">✓</div><h2>Solicitação enviada!</h2><p>O profissional recebeu sua solicitação. Agora vocês podem conversar pela aba de Serviços.</p><button class="btn btn-primary" style="width:100%" onclick="closeModal()">Concluir</button>`);
}

async function ensureConversation(clienteId,profissionalId){
    const {data,error}=await sb.from("conversas").upsert({cliente_id:clienteId,profissional_id:profissionalId},{onConflict:"cliente_id,profissional_id"}).select("id").single();
    return {data,error};
}

async function openChat(professionalId,name){
    if(!sb){requireBackend();return;}
    const {data:{user}}=await sb.auth.getUser();
    if(!user){login();return;}
    const {data:pro}=await sb.from("profissionais").select("id,usuario_id,nome,status,verificado").eq("id",professionalId).single();
    if(!pro)return;
    if(pro.usuario_id===user.id){
        openModal(`<h2>Chat indisponível</h2><div class="notice">Você não pode iniciar uma conversa com seu próprio perfil profissional.</div><button class="btn btn-primary" style="width:100%" onclick="closeModal()">Entendi</button>`);
        return;
    }
    const {data:conversation,error}=await ensureConversation(user.id,professionalId);
    if(error||!conversation){openModal(`<h2>Não foi possível abrir o chat</h2><div class="notice">${escapeHtml(error?.message||"Tente novamente.")}</div>`);return;}
    openModal(`<h2>Chat com ${escapeHtml(name||pro.nome)}</h2><div id="chatMessages" class="chat-messages"><p class="chat-empty">Carregando mensagens...</p></div><div id="chatSecurityNotice" class="notice">🛡️ Não envie telefone, WhatsApp, @usuários ou contatos externos. Tentativas são bloqueadas e encaminhadas para denúncias.</div><div class="chat-compose"><textarea id="chatInput" rows="2" maxlength="1000" placeholder="Digite sua mensagem..."></textarea><button class="btn btn-primary" onclick="sendChatMessage('${conversation.id}')">Enviar</button></div>`);
    await loadChatMessages(conversation.id);
}
async function loadChatMessages(conversationId){
    const box=document.getElementById("chatMessages");
    if(!box)return;
    const {data,error}=await sb.from("mensagens").select("id,remetente_id,conteudo,criado_em").eq("conversa_id",conversationId).order("criado_em",{ascending:true});
    if(error){box.innerHTML=`<div class="notice">Não foi possível carregar as mensagens.</div>`;return;}
    const {data:{user}}=await sb.auth.getUser();
    if(!data?.length){box.innerHTML=`<p class="chat-empty">Nenhuma mensagem ainda. Envie a primeira.</p>`;return;}
    box.innerHTML=data.map(m=>`<div class="chat-bubble ${m.remetente_id===user.id?"mine":"theirs"}"><p>${escapeHtml(m.conteudo)}</p><small>${new Date(m.criado_em).toLocaleString("pt-BR",{dateStyle:"short",timeStyle:"short"})}</small></div>`).join("");
    box.scrollTop=box.scrollHeight;
}
async function sendChatMessage(conversationId){
    const input=document.getElementById("chatInput");
    const text=input?.value.trim();
    if(!text)return;
    const result=await sendSecureMessage(conversationId,text);
    if(result.blocked||result.error){showNoticeInChat(result.error.message);return;}
    input.value="";
    await loadChatMessages(conversationId);
}
function showNoticeInChat(text){const box=document.getElementById("chatSecurityNotice")||document.getElementById("chatMessages");if(box){box.textContent=text;box.classList.remove("hidden");}}

async function enterProfessional(pro){
    document.getElementById("publicNav").classList.add("hidden");
    document.getElementById("userNav").classList.add("hidden");
    document.querySelectorAll(".client-only").forEach(x=>x.style.display="none");
    document.querySelectorAll(".master-only").forEach(x=>x.style.display="none");
    document.getElementById("professionalOnly")?.classList.remove("hidden");
    document.getElementById("professionalWelcome").textContent=`Olá, ${String(pro.nome||"Profissional").split(" ")[0]} 👋`;
    showPage("professionalHome");
    loadProfessionalServices();
}

async function loadProfessionalServices(){
    if(!sb)return;
    const {data:{user}}=await sb.auth.getUser();
    if(!user)return;
    const {data:pro}=await sb.from("profissionais").select("id,nome,profissao,status,verificado").eq("usuario_id",user.id).maybeSingle();
    const box=document.getElementById("professionalServiceList");
    if(!box||!pro)return;
    const {data:convs,error}=await sb.from("conversas").select("id,cliente_id,criado_em,atualizado_em").eq("profissional_id",pro.id).order("atualizado_em",{ascending:false});
    if(error){box.innerHTML=`<div class="notice">Não foi possível carregar seus chats.</div>`;return;}
    const count=document.getElementById("professionalChatCount"); if(count)count.textContent=String(convs?.length||0);
    if(!convs?.length){box.innerHTML=`<div class="chat-empty">Nenhum cliente entrou em contato ainda.</div>`;return;}
    const ids=[...new Set(convs.map(c=>c.cliente_id))];
    const {data:users}=await sb.from("usuarios").select("id,nome").in("id",ids);
    const names=new Map((users||[]).map(u=>[u.id,u.nome]));
    box.innerHTML=convs.map(c=>{const n=names.get(c.cliente_id)||"Cliente";const initials=n.split(/\s+/).slice(0,2).map(x=>x[0]).join("").toUpperCase();return `<button class="professional-chat-row" onclick="openProfessionalChat('${c.id}','${escapeHtml(n)}')"><span class="avatar">${escapeHtml(initials)}</span><span><b>${escapeHtml(n)}</b><small>Cliente • ${new Date(c.atualizado_em||c.criado_em).toLocaleDateString("pt-BR")}</small></span><strong>›</strong></button>`;}).join("");
}
async function openProfessionalChat(conversationId,name){
    const {data:{user}}=await sb.auth.getUser();
    if(!user)return;
    document.getElementById("professionalChatPlaceholder")?.classList.add("hidden");
    const active=document.getElementById("professionalChatActive");active?.classList.remove("hidden");
    const nameEl=document.getElementById("professionalChatClientName");if(nameEl)nameEl.textContent=name;
    const avatar=document.getElementById("professionalChatClientAvatar");if(avatar)avatar.textContent=name.split(/\s+/).slice(0,2).map(x=>x[0]).join("").toUpperCase();
    const input=document.getElementById("professionalChatInput");if(input)input.dataset.conversationId=conversationId;
    await loadProfessionalChatMessages(conversationId);
}
async function loadProfessionalChatMessages(conversationId){
    const box=document.getElementById("professionalChatMessages");if(!box)return;
    const {data,error}=await sb.from("mensagens").select("id,remetente_id,conteudo,criado_em").eq("conversa_id",conversationId).order("criado_em",{ascending:true});
    const {data:{user}}=await sb.auth.getUser();
    if(error){box.innerHTML=`<div class="notice">Não foi possível carregar as mensagens.</div>`;return;}
    if(!data?.length){box.innerHTML=`<p class="chat-empty">Nenhuma mensagem ainda.</p>`;return;}
    box.innerHTML=data.map(m=>`<div class="chat-bubble ${m.remetente_id===user.id?"mine":"theirs"}"><p>${escapeHtml(m.conteudo)}</p><small>${new Date(m.criado_em).toLocaleString("pt-BR",{dateStyle:"short",timeStyle:"short"})}</small></div>`).join("");box.scrollTop=box.scrollHeight;
}
async function sendProfessionalMessage(){
    const input=document.getElementById("professionalChatInput");const conversationId=input?.dataset.conversationId;const text=input?.value.trim();if(!conversationId||!text)return;
    const result=await sendSecureMessage(conversationId,text);
    const notice=document.getElementById("professionalChatNotice");
    if(result.blocked||result.error){if(notice){notice.textContent=result.error.message;notice.classList.remove("hidden");}return;}
    if(notice)notice.classList.add("hidden");input.value="";await loadProfessionalChatMessages(conversationId);await loadProfessionalServices();
}

async function loadProfessionalApplication(id){
    const {data:pro,error}=await sb.from("profissionais").select("id,nome,telefone,email,data_nascimento,cidade,estado,cep,profissao,experiencia,descricao,status,verificado,criado_em").eq("id",id).single();
    if(error||!pro)return null;
    const {data:refs}=await sb.from("referencias").select("id,nome,telefone,ordem,contato_verificado,observacao").eq("profissional_id",id).order("ordem");
    return {pro,refs:refs||[]};
}
async function analyzeApplication(id){
    const item=await loadProfessionalApplication(id);
    if(!item){openModal(`<h2>Não foi possível carregar</h2><div class="notice">Verifique as permissões do administrador no Supabase.</div><button class="btn btn-primary" style="width:100%" onclick="closeModal()">Fechar</button>`);return;}
    const p=item.pro;
    const options=categories.map(c=>`<option value="${escapeHtml(c[1])}" ${String(p.profissao||"")===c[1]?"selected":""}>${escapeHtml(c[1])}</option>`).join("");
    const refs=item.refs.map(r=>`<div class="reference-admin"><b>${r.ordem}. ${escapeHtml(r.nome)}</b><span>${escapeHtml(r.telefone)}</span><span>${r.contato_verificado?"✓ Contato verificado":"○ Ainda não verificado"}</span>${r.observacao?`<small>${escapeHtml(r.observacao)}</small>`:""}</div>`).join("");
    openModal(`<h2>Análise do profissional</h2><div class="analysis-grid"><div><b>Nome</b><span>${escapeHtml(p.nome)}</span></div><div><b>E-mail</b><span>${escapeHtml(p.email||"")}</span></div><div><b>Telefone</b><span>${escapeHtml(p.telefone||"")}</span></div><div><b>Cidade</b><span>${escapeHtml(p.cidade||"")}${p.estado?", "+escapeHtml(p.estado):""}</span></div><div><b>CEP</b><span>${escapeHtml(p.cep||"Não informado")}</span></div><div><b>Nascimento</b><span>${escapeHtml(p.data_nascimento||"Não informado")}</span></div><div><b>Experiência</b><span>${escapeHtml(p.experiencia||"Não informado")}</span></div></div><div class="form-group"><label>Categoria do profissional</label><select id="analysisCategory">${options}</select></div><div class="form-group"><label>Descrição</label><textarea id="analysisDescription" rows="4">${escapeHtml(p.descricao||"")}</textarea></div><div class="panel" style="margin-top:10px"><h3>5 referências</h3>${refs||"<p>Nenhuma referência encontrada.</p>"}</div><div id="analysisError" class="notice hidden"></div><div class="analysis-actions"><button class="btn btn-danger" onclick="reviewProfessional('${id}','rejeitado')">Rejeitar</button><button class="btn btn-primary" onclick="reviewProfessional('${id}','aprovado')">Aprovar profissional</button></div>`);
}
async function reviewProfessional(id,status){
    if(!window.resolveJaIsMaster && !window.resolveJaIsAdmin){openModal(`<h2>Acesso negado</h2><p>Você não tem permissão para analisar profissionais.</p>`);return;}
    const category=document.getElementById("analysisCategory")?.value;
    const description=document.getElementById("analysisDescription")?.value.trim();
    const e=document.getElementById("analysisError");
    if(!category){e.textContent="Escolha uma categoria.";e.classList.remove("hidden");return;}
    const {error}=await sb.from("profissionais").update({profissao:category,descricao:description,status,verificado:status==="aprovado",analisado_em:new Date().toISOString()}).eq("id",id);
    if(error){e.textContent="Não foi possível salvar a análise: "+error.message;e.classList.remove("hidden");return;}
    closeModal();adminPage("analyses",document.querySelectorAll(".side-btn")[1]);
}
async function adminPage(page,el){
    document.querySelectorAll(".side-btn").forEach(x=>x.classList.remove("active"));if(el)el.classList.add("active");
    const c=document.getElementById("adminContent");
    if(page==="dashboard")c.innerHTML=`<h2>Visão geral</h2><p style="color:#718078">Painel administrativo da ResolveJá.</p><div class="cards"><div class="metric"><small>Banco</small><strong>Online</strong></div><div class="metric"><small>RLS</small><strong>Ativo</strong></div><div class="metric"><small>Verificação</small><strong>5 referências</strong></div><div class="metric"><small>Avaliações</small><strong>1–10</strong></div></div>`;
    else if(page==="analyses"){
        c.innerHTML=`<h2>Análises</h2><p style="color:#718078">Revise os cadastros enviados pelos profissionais.</p><div id="analysisList" class="panel"><p>Carregando...</p></div>`;
        const box=document.getElementById("analysisList");
        const {data,error}=await sb.from("profissionais").select("id,nome,email,telefone,cidade,estado,profissao,experiencia,status,verificado,criado_em").eq("status","pendente").order("criado_em",{ascending:false});
        if(error){box.innerHTML=`<div class="notice">Não foi possível carregar a fila. Confira as políticas RLS para administradores.</div>`;return;}
        if(!data?.length){box.innerHTML=`<h3>Nenhuma candidatura pendente</h3><p>Quando um profissional enviar o cadastro, ele aparecerá aqui.</p>`;return;}
        box.innerHTML=data.map(p=>`<div class="admin-application"><div><b>${escapeHtml(p.nome)}</b><span>${escapeHtml(p.profissao||"Sem categoria")} • ${escapeHtml(p.cidade||"")}${p.estado?", "+escapeHtml(p.estado):""}</span><small>${escapeHtml(p.email||"")} • ${escapeHtml(p.telefone||"")}</small></div><button class="btn btn-primary" onclick="analyzeApplication('${p.id}')">Analisar</button></div>`).join("");
    }
    else if(page==="professionals"){
        c.innerHTML=`<h2>Profissionais</h2><div id="adminPros" class="panel"><p>Carregando...</p></div>`;
        const box=document.getElementById("adminPros");
        const {data,error}=await sb.from("profissionais").select("nome,profissao,cidade,estado,status,verificado").order("criado_em",{ascending:false});
        if(error){box.innerHTML=`<div class="notice">Não foi possível carregar profissionais.</div>`;return;}
        box.innerHTML=(data||[]).map(p=>`<div class="admin-application"><div><b>${escapeHtml(p.nome)}</b><span>${escapeHtml(p.profissao||"")} • ${escapeHtml(p.cidade||"")}${p.estado?", "+escapeHtml(p.estado):""}</span></div><span class="status">${escapeHtml(p.status||"")}</span></div>`).join("")||"<p>Nenhum profissional cadastrado.</p>";
    }
    else if(page==="users"){
        c.innerHTML=`<h2>Usuários</h2><p style="color:#718078">Todos os usuários cadastrados aparecem aqui. Você pode ver o estado da conta e aplicar punições.</p><div id="adminUserResults" class="panel"><p>Carregando usuários...</p></div>`;searchAdminUsers();
    }
    else if(page==="reports"){
        c.innerHTML=`<h2>Denúncias</h2><p style="color:#718078">Tentativas de compartilhamento de contatos e outras ocorrências.</p><div id="reportsList" class="panel"><p>Carregando...</p></div>`;
        loadAdminReports();
    }
    else if(page==="logs")c.innerHTML=`<h2>Registros</h2><div class="panel"><p>Auditoria administrativa protegida por RLS.</p></div>`;
    else if(page==="admins"){
        c.innerHTML=`<h2>Administradores</h2><p style="color:#718078">A Conta Mestre pode cadastrar novos administradores.</p><div class="panel"><div class="form-group"><label>Nome</label><input id="newAdminName" placeholder="Nome do administrador"></div><div class="form-group"><label>E-mail</label><input id="newAdminEmail" type="email" placeholder="admin@gmail.com"></div><div class="form-group"><label>Senha</label><input id="newAdminPass" type="password" placeholder="Senha do administrador"></div><div id="newAdminError" class="notice hidden"></div><button class="btn btn-primary" onclick="createAdminAccount()">Criar conta de ADM</button></div>`;
    }
    else c.innerHTML=`<h2>Configurações</h2><div class="panel"><p>Configurações da plataforma e da conta administrativa.</p></div>`;
}
async function searchAdminUsers(){
    if(!window.resolveJaIsAdmin)return;
    const box=document.getElementById("adminUserResults");if(!box)return;
    const {data,error}=await sb.from("usuarios").select("id,nome,email,telefone,cidade,estado,tipo,status,punicao_expira_em,motivo_punicao,criado_em").order("criado_em",{ascending:false});
    if(error){box.innerHTML=`<div class="notice">Não foi possível carregar os usuários. ${escapeHtml(error.message)}</div>`;return;}
    if(!data?.length){box.innerHTML=`<p>Nenhum usuário cadastrado.</p>`;return;}
    box.innerHTML=data.map(u=>{const blocked=u.status&&u.status!=="ativo";return `<div class="admin-user-row"><div><b>${escapeHtml(u.nome||"Sem nome")}</b><span>${escapeHtml(u.tipo||"cliente")} • ${escapeHtml(u.cidade||"")}${u.estado?", "+escapeHtml(u.estado):""}</span><small>${escapeHtml(u.email||"")} • ${blocked?"⛔ "+escapeHtml(u.motivo_punicao||"Conta punida"):"✅ Conta ativa"}</small></div><div class="admin-user-actions"><button class="btn btn-danger" onclick="punishUser('${u.id}')">Punir</button><button class="btn btn-outline" onclick="clearUserPunishment('${u.id}')">Liberar</button></div></div>`;}).join("");
}
async function punishUser(userId){
    if(!window.resolveJaIsAdmin)return;
    openModal(`<h2>Punir usuário</h2><p>A conta ficará bloqueada dentro da ResolveJá.</p><div class="form-group"><label>Duração</label><select id="punishDuration"><option value="5">5 minutos</option><option value="60">1 hora</option><option value="1440">24 horas</option><option value="10080">7 dias</option><option value="0">Permanente</option></select></div><div class="form-group"><label>Motivo</label><input id="punishReason" placeholder="Motivo da punição"></div><div id="punishError" class="notice hidden"></div><button class="btn btn-danger" style="width:100%" onclick="applyPunishment('${userId}')">Aplicar punição</button>`);
}
async function applyPunishment(userId){
    if(!window.resolveJaIsAdmin)return;
    const duration=Number(document.getElementById("punishDuration")?.value||0);const reason=document.getElementById("punishReason")?.value.trim()||"Violação das regras da ResolveJá";const e=document.getElementById("punishError");
    const {data,error}=await sb.rpc("punir_usuario_resolveja",{p_usuario_id:userId,p_minutos:duration,p_motivo:reason});
    if(error){e.textContent=error.message;e.classList.remove("hidden");return;}closeModal();adminPage("users",document.querySelectorAll(".side-btn")[3]);
}
async function clearUserPunishment(userId){
    if(!window.resolveJaIsAdmin)return;
    const {error}=await sb.rpc("liberar_usuario_resolveja",{p_usuario_id:userId});
    if(error){openModal(`<h2>Não foi possível liberar</h2><div class="notice">${escapeHtml(error.message)}</div>`);return;}
    searchAdminUsers();
}
async function loadAdminReports(){
    const box=document.getElementById("reportsList");if(!box)return;
    const {data,error}=await sb.from("denuncias_seguranca").select("id,denunciante_id,usuario_denunciado_id,tipo,descricao,status,criado_em").order("criado_em",{ascending:false}).limit(100);
    if(error){box.innerHTML=`<div class="notice">Não foi possível carregar as denúncias. ${escapeHtml(error.message)}</div>`;return;}
    if(!data?.length){box.innerHTML=`<h3>Nenhuma denúncia</h3><p>Não há ocorrências registradas.</p>`;return;}
    box.innerHTML=data.map(r=>`<div class="report-row"><div><b>${escapeHtml(r.tipo)}</b><span>${new Date(r.criado_em).toLocaleString("pt-BR")}</span><p>${escapeHtml(r.descricao||"")}</p></div><span class="status">${escapeHtml(r.status||"pendente")}</span><button class="btn btn-danger" onclick="punishUser('${r.usuario_denunciado_id}')">Punir usuário</button></div>`).join("");
}

async function createAdminAccount(){
    if(!window.resolveJaIsMaster){return;}
    const name=document.getElementById("newAdminName")?.value.trim();
    const email=document.getElementById("newAdminEmail")?.value.trim();
    const pass=document.getElementById("newAdminPass")?.value||"";
    const e=document.getElementById("newAdminError");
    if(!name||!email||pass.length<6){e.textContent="Preencha nome, e-mail e uma senha de pelo menos 6 caracteres.";e.classList.remove("hidden");return;}
    const {data,error}=await sb.auth.signUp({email,password:pass,options:{data:{nome,tipo:"admin"}}});
    if(error){e.textContent=error.message;e.classList.remove("hidden");return;}
    if(!data.user){e.textContent="Não foi possível criar o usuário.";e.classList.remove("hidden");return;}
    if(data.session){
        await sb.auth.signOut();
        resetLoggedOut();
        openModal(`<h2>Administrador criado</h2><p>O usuário <b>${escapeHtml(email)}</b> foi criado no Auth, mas o Supabase entrou automaticamente nessa nova conta.</p><div class="notice">Para finalizar a criação do ADM com segurança, deixe a confirmação de e-mail ativada. Depois confirme o e-mail e peça para a Conta Mestre concluir o vínculo do ADM.</div><button class="btn btn-primary" style="width:100%" onclick="closeModal();login()">Voltar ao login</button>`);
        return;
    }
    const {error:adminError}=await sb.from("administradores").insert({usuario_id:data.user.id,cargo:"admin",ativo:true});
    if(adminError){e.textContent="Conta criada no Auth, mas não foi possível registrar o ADM. Verifique as políticas RLS.";e.classList.remove("hidden");return;}
    document.getElementById("adminContent").innerHTML=`<div class="panel"><div class="success-icon">✓</div><h3>Administrador criado</h3><p>${escapeHtml(email)} agora está cadastrado como ADM. Ele receberá o código de confirmação no Gmail se a confirmação de e-mail estiver ativa.</p></div>`;
}
async function boot(){
    renderServices();
    await renderPros();
    document.querySelectorAll(".auth-only,.client-only,.master-only").forEach(x=>x.style.display="none");
    if(!sb)return;
    const {data:{session}}=await sb.auth.getSession();
    if(session?.user)await routeAuthenticatedUser(session.user);
    sb.auth.onAuthStateChange((event,session)=>{if(event==="SIGNED_OUT")resetLoggedOut();});
}
document.getElementById("loginBtn").onclick=login;
document.getElementById("registerBtn").onclick=openRegister;
document.querySelectorAll(".nav-link").forEach(b=>b.onclick=()=>{if(b.classList.contains("auth-only")&&!sb)return;showPage(b.dataset.page)});
boot();

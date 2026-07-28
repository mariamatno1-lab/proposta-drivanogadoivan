const whatsapp = "https://wa.me/5511968112100";

const areas = [
  ["Direito Cível", "Orientação e atuação em conflitos envolvendo contratos, cobranças, indenizações, direito do consumidor e demais questões da esfera cível."],
  ["Direito do Trabalho", "Assessoria para empregados e empregadores em reclamações trabalhistas, rescisões contratuais, verbas trabalhistas e prevenção de conflitos nas relações de trabalho."],
  ["Direito Penal", "Defesa técnica e acompanhamento jurídico em inquéritos, processos criminais, audiências e medidas urgentes, sempre com sigilo e atenção ao caso concreto."],
  ["Direito de Família e Sucessões", "Atuação em divórcios, pensão alimentícia, guarda e convivência de filhos, inventários e outras questões familiares e patrimoniais."],
];

const faqs = [
  ["O atendimento pode ser feito online?", "Sim. Conforme a natureza do caso, o atendimento inicial e o acompanhamento podem ser realizados online, com praticidade e segurança."],
  ["O escritório atende somente Cotia?", "Não. O escritório atende presencialmente em Cotia e também clientes de Itapevi, Praia Grande, Itanhaém e outras cidades da Baixada Santista, além de prestar atendimento online."],
  ["Quais documentos preciso levar?", "Os documentos variam conforme a situação. No primeiro contato, o escritório orientará sobre quais informações e documentos podem ser relevantes para a análise do caso."],
  ["Como agendar um atendimento?", "Você pode entrar em contato pelo WhatsApp, telefone ou formulário desta página. A equipe retornará para orientar sobre o atendimento."],
];

export default function Home() {
  return <main>
    <header className="top"><a className="brand" href="#inicio">Dantas <em>&</em> Advogados</a><a className="top-link" href={whatsapp}>WhatsApp: (11) 96811-2100</a></header>
    <section id="inicio" className="hero">
      <div className="hero-copy"><p className="eyebrow">Dantas & Advogados Associados</p><h1>Assessoria jurídica com <i>clareza e estratégia.</i></h1><p className="lead">Atendimento jurídico personalizado para pessoas físicas e empresas, com atuação presencial e online.</p><p>O Dantas & Advogados Associados atua há mais de 14 anos oferecendo orientação e representação jurídica em demandas cíveis, trabalhistas, criminais e de família.</p><p className="location">Cotia, Itapevi, Praia Grande, Itanhaém e municípios da Baixada Santista.</p><a className="button" href={whatsapp}>Falar com o escritório no WhatsApp <span>→</span></a></div>
      <div className="portrait"><img src="https://www.advogadoemcotia.com.br/assets/images/preto-e-branco-640x684.jpg" alt="Dr. Ivan Souza Dantas"/><div className="oab">OAB/SP<br/><strong>303.195</strong></div></div>
    </section>
    <section className="section"><p className="eyebrow">Como podemos auxiliar</p><h2>Atuação jurídica para o que importa agora.</h2><div className="areas">{areas.map(([title, text], i) => <article key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div><a className="button dark" href={whatsapp}>Solicitar atendimento <span>→</span></a></section>
    <section className="section split muted"><div><p className="eyebrow">Atendimento jurídico</p><h2>Clareza e proximidade desde o primeiro contato.</h2><p>Sabemos que uma questão jurídica pode trazer dúvidas, preocupação e decisões importantes. Por isso, o escritório busca oferecer um atendimento direto, responsável e individualizado.</p></div><ul><li>Mais de 14 anos de atuação jurídica</li><li>Atendimento presencial e online</li><li>Orientação clara sobre cada etapa do caso</li><li>Atuação em Cotia, Itapevi e Litoral Sul de São Paulo</li></ul></section>
    <section className="section split"><div><p className="eyebrow">Atendimento presencial e online</p><h2>Onde você estiver, conte com orientação segura.</h2></div><div><p>O escritório atende clientes de Cotia, Itapevi, Praia Grande, Itanhaém, Bertioga, Cubatão, Guarujá, Mongaguá, Peruíbe, Santos e São Vicente, além de demandas que possam ser conduzidas de forma online.</p><p>Entre em contato para apresentar sua situação e receber as orientações iniciais sobre o atendimento jurídico.</p><a className="text-link" href={whatsapp}>Falar com o escritório →</a></div></section>
    <section className="section about"><p className="eyebrow">Sobre o advogado</p><h2>Ivan Souza Dantas</h2><p className="subtitle">Advogado inscrito na OAB/SP sob o nº 303.195 e responsável pelo Dantas & Advogados Associados.</p><p>Com mais de 14 anos de experiência, atua com compromisso, discrição e atenção às particularidades de cada demanda, buscando oferecer suporte jurídico seguro e acessível aos clientes.</p></section>
    <section className="section faq"><p className="eyebrow">Perguntas frequentes</p><h2>Informações para o seu primeiro contato.</h2>{faqs.map(([q, a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</section>
    <section className="contact"><div><p className="eyebrow">Entre em contato</p><h2>Seu caso merece atenção.</h2><p>Para dúvidas ou para solicitar atendimento jurídico, fale com o Dantas & Advogados Associados.</p><a className="button" href={whatsapp}>Falar com o escritório <span>→</span></a></div><div className="contact-details"><p><b>Telefone e WhatsApp</b><br/><a href={whatsapp}>(11) 96811-2100</a></p><p><b>E-mail</b><br/><a href="mailto:ivan_advogado@hotmail.com">ivan_advogado@hotmail.com</a></p><p><b>Endereço em Cotia</b><br/>Av. Prof. Manoel José Pedroso, 1695, Sala 4<br/>Parque Bahia — Cotia/SP — CEP 06717-100</p></div><form><label>Nome<input type="text" name="nome"/></label><label>E-mail<input type="email" name="email"/></label><label>WhatsApp<input type="tel" name="whatsapp"/></label><label>Mensagem<textarea name="mensagem" rows={4}/></label><button type="button">Enviar mensagem</button><small>As informações enviadas serão utilizadas exclusivamente para retorno do escritório, em conformidade com a Política de Privacidade.</small></form></section>
    <footer>© {new Date().getFullYear()} Dantas & Advogados Associados</footer>
  </main>;
}

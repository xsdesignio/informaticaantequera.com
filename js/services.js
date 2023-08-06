

let services = [
    {
        name: "Ciberseguridad.",
        description: "Ofrecemos servicios avanzados de ciberseguridad para que no tengas sobresaltos. Abre tu empresa a internet sin riesgos.",
        url: "services/cibersecurity.html",
        iconUrl: "assets/icons/services/14.png",
        type: "company",
    },
    {
        name: "Outsourcing Informático.",
        description: "Si necesita un técnico informático de forma continua, como si formase parte de su empresa, pero con coste reducido, el Outsourcing Informático es su solución.",
        url: "services/outsourcing.html",
        iconUrl: "assets/icons/services/18.png",
        type: "company",
    },
    {
        name: "Reparación de Mac, Iphone, Ipad.",
        description: "Reparamos cualquiera de tus dispositivos Apple con las máximas garantías y los precios más competitivos. ¡No pagues más por lo mismo!",
        url: "services/apple-repairing.html",
        iconUrl: "assets/icons/services/6.png",
        type: "individual",
    },
    {
        name: "TPV para comercio y Hostelería.",
        description: "Somos expertos en la instalación de terminales de venta para comercio y hostelería. Sistemas táctiles, móviles o fijos, con software intuitivo y adaptado a cada tipo de negocio.",
        url: "services/tpv-for-commerce.html",
        iconUrl: "assets/icons/services/5.png",
        type: "company",
    },
    {
        name: "Paginas Web.",
        description: "Le ofrecemos servicios especializados en consultoría y diseño de páginas web. Todo lo necesario para empresas y profesionales que deseen iniciar o renovar su presencia en internet.",
        url: "services/web-pages.html",
        iconUrl: "assets/icons/services/15.png",
        type: "all",
    },
    {
        name: "Instalaciones de Red.",
        description: "Si dispone de varios ordenadores y dispositivos informáticos, podemos configurarlos en rede para que pueda compartir información entre ellos.",
        url: "services/network-installation.html",
        iconUrl: "assets/icons/services/12.png",
        type: "company",
    },
    {
        name: "Mantenimiento Informático.",
        description: "Servicio de Mantenimiento Informático Preventivo y Correctivo. Para que la informática de su negocio no sea un problema sino una eficaz herramienta.",
        url: "services/computer-maintenance.html",
        iconUrl: "assets/icons/services/13.png",
        type: "company",
    },
    {
        name: "Reparación de Consolas",
        description: "Repara tu consola con el mejor equipo de profesionales, con la tecnología más avanzada disponible y al mejor precio. Presupuesto sin coste y sin compromiso.",
        url: "services/console-repairing.html",
        iconUrl: "assets/icons/services/9.png",
        type: "individual",
    },

    {
        name: "Servicio Técnico Informático",
        description: "Ofrecemos  servicio técnico informático profesional, económico y rápido. Disponemos de las herramientas más avanzadas del mercado.",
        url: "services/technical-service.html",
        iconUrl: "assets/icons/services/8.png",
        type: "company",
    },

    {
        name: "Recuperación de Datos",
        description: "Si has perdido información importante por borrado accidental de datos, virus o avería física de dispositivos, te ayudamos a recuperarla.",
        url: "services/data-recovery.html",
        iconUrl: "assets/icons/services/11.png",
        type: "all",
    },

    {
        name: "Software De Gestión Empresarial",
        description: "Disponemos de programas de facturación y contabilidad para la gestión de presupuestos, albaranes, facturas, compras, ventas, estadísticas, etc.",
        url: "services/business-management-software.html",
        iconUrl: "assets/icons/services/5.png",
        type: "company",
    },

    {
        name: "Instalaciones de VideoVigilancia",
        description: "Disponemos de una gran gama de soluciones profesionales de vídeo con las que podrá vigilar y controlar su negocio, tanto local como a través de su móvil.",
        url: "services/video-surveillance.html",
        iconUrl: "assets/icons/services/12.png",
        type: "all",
    },

    {
        name: "Copias de Seguridad",
        description: "Sus datos son muy importantes y hay múltiples factores que facilitarán su pérdida: virus, borrado accidental, averías, subidas de tensión, etc.",
        url: "services/security-copies.html",
        iconUrl: "assets/icons/services/13.png",
        type: "all",
    },

    {
        name: "Informes Periciales",
        description: "Realizamos informes Periciales y Probatorios. Somos Ingenieros Informáticos, expertos en informática forense. Valoración Gratuita.",
        url: "services/expert-reports.html",
        iconUrl: "assets/icons/services/16.png",
        type: "company",
    },
    {
        name: "Reparación de Móviles",
        description: "Reparación de dispositivos móviles. Software, electrónica, pantallas, baterias, etc. Todo con servicio urgente y sin cita previa.",
        url: "services/mobile-repairing.html",
        iconUrl: "assets/icons/services/6.png",
        type: "individual",
    },
    {
        name: "Instalación de Servidores",
        description: "Sea cual sea el tamaño de tu negocio, te ofrecemos asesoramiento e instalación de servidores físicos o en la nube así como virtualización.",
        url: "services/server-installing.html",
        iconUrl: "assets/icons/services/8.png",
        type: "company",
    },
    {
        name: "Control Parental",
        description: "Ofrecemos herramientas para que la utilización de ordenadores y dispositivos móviles de los tuyos se una experiencia enriquecedora sin correr riesgos.",
        url: "services/parental-control.html",
        iconUrl: "assets/icons/services/17.png",
        type: "individual",
    },
    {
        name: "Cajon de Cobro Automático",
        description: "Con un cajón de cobro automático, la caja siempre cuadra para que no tengas que preocuparte por nada. Instalación, reparación y mantenimiento. ¡Que nadie toque tu dinero!",
        url: "services/automatic-cash-register.html",
        iconUrl: "assets/icons/services/1.png",
        type: "company",
    },
    {
        name: "Software Para Restaurantes",
        description: "Instalamos software de primer nivel para comercios y restaurantes. Software táctil, con terminales móviles, control de stock y herramientas estadísticas. Servicio técnico propio.",
        url: "services/software-for-restaurants.html",
        iconUrl: "assets/icons/services/3.png",
        type: "company",
    },
]


// Code for services on home page
let servicesSection8 = document.getElementById("services-8") // 8 services shown

if(servicesSection8) {
    let servicesContent = ""

    let amount = 0;

    services.map(service => {
        if(amount < 8) {
            servicesContent+=serviceElement(service)
            amount++
        }
    })

    servicesSection8.innerHTML = servicesContent

}



// Code for services on services page
let availableFilters = {
    all: "all",
    individual: "individual",
    company: "company"
}
let selectedType = availableFilters.all


let servicesSection = document.getElementById("services") // 8 services shown


function setServices() {

    if(servicesSection) {
        let servicesContent = ""
    
        services.map(service => {
            if(service.type == selectedType || selectedType == "all")
                servicesContent+=serviceElement(service)
        })
    
        servicesSection.innerHTML = servicesContent
    
    }

}

function selectAll() {
    selectedType = availableFilters.all
    setServices()
}

function selectCompanyServices() {
    selectedType = availableFilters.company
    setServices()
}

function selectIndividualServices() {
    selectedType = availableFilters.individual
    setServices()
}


setServices()





// Common code
function serviceElement({
    name, description, url, iconUrl
}){
    return `
    <div>
        <a href="${url}" class="service-card">
            <img class="service-icon" src="${iconUrl}" alt="" srcset="${iconUrl}">
            <h3>${ name }</h3>
            <p>${ description }</p>
            <span href="${ url }">
                Obtener más información
                <img class="link-icon" src="assets/icons/right-arrow.png" alt="" srcset="assets/icons/right-arrow.png">
            </span>
        </a>
    </div>`
}




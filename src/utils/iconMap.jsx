import {
    FiMail,
    FiMapPin,
    FiPhone,
    FiLinkedin,
    FiDatabase,
    FiCode,
    FiGitBranch,
    FiBarChart2,
} from "react-icons/fi";

const iconMap = {
    mail: FiMail,
    mappin: FiMapPin,
    phone: FiPhone,
    linkedin: FiLinkedin,
    database: FiDatabase,
    code: FiCode,
    gitbranch: FiGitBranch,
    barchart: FiBarChart2,
};

export function getIcon(name, className = "w-5 h-5") {
    const Icon = iconMap[name];
    return Icon ? <Icon className={className} /> : null;
}

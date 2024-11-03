interface HeaderProps {
    toggleLanguage: () => void;
    language: 'es' | 'en';
}
declare function Header({ toggleLanguage, language }: HeaderProps): import("react/jsx-runtime").JSX.Element;
export default Header;

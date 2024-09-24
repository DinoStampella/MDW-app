export interface LogoInterface {
    href: string;
    src: string | undefined;
    className: string;
    alt: string;
}

const Logo = ({href, src, className, alt}: LogoInterface) => {
    return (
        <a href={href} target="_blank">
          <img src={src} className={className} alt={alt} />
        </a>
    )
}

export default Logo
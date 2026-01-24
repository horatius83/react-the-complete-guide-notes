export default function Header({title, headerImage, altText}) {
    return <div id="header">
        <img src={headerImage} alt={altText} />
        <h1>{title}</h1>
    </div>
}
import Image from 'next/image' //theme related images need to be inside the public folder

const Icon = ({ slug }) => {
    return <Image 
        src={`/icons/${slug}.svg`}
        alt={`${slug} icon`}
        width={50}
        height={50}
    />
}
export default Icon;
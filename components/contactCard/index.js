
function ContactCard({mainClass, src, title, text, subTitle}) {
  return (
    <div className={` ${mainClass} text-black w-56 flex flex-col items-center`}>
        <image src={src} />
        <h1 className="font-medium text-md font-roboto">{title}</h1>
        <p className="font-normal leading-4 text-sm text-center font-raleway">{text}</p>
        <p className="font-medium leading-4 text-sm font-robolto">{subTitle}</p>
    </div>
  )
}

export default ContactCard
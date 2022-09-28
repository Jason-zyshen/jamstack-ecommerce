import { Center, Footer, Tag, Showcase } from '../../components'


const DisplayLarge = ({ imageSrc, title, link, price, category }) => {
  return (
    <div className="bg-blue-300
        p-6 pb-10 smpb-6
        flex lg:flex-row flex-col">
      <div className="pt-4 pl-2 sm:pt-12 sm:pl-12 flex flex-col">
        <Tag
          // year="2021"
          category={category}
        />
        <Center
          price={price}
          title={title}
          link={`${link}`}
        />
        <Footer designer={imageSrc?.createdBy}/>
      </div>
      <div className="flex flex-1 justify-center items-center relative">
        <Showcase imageSrc={imageSrc} />
        <div className="absolute
        w-48 h-48 sm:w-72 sm:h-72 xl:w-88 xl:h-88
        bg-white z-0 rounded-full" />
      </div>
    </div>
)}

export default DisplayLarge;



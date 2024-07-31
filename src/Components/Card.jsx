import { motion } from "framer-motion";
import { FaRegFileAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { LuDownload } from "react-icons/lu";

const Card = ({ data , reference }) => {
  return (
    <motion.div drag dragConstraints = {reference} whileDrag={{scale:1.2}} className="relative flex-shrink-0 sm:w-[15vw] sm:h-[33vh] w-[48vw] h-[70vw] sm:rounded-[3vw] rounded-[13vw] bg-zinc-900/90 text-white px-8 sm:py-10 py-6 overflow-hidden">
      <FaRegFileAlt />
      <p className="font-semibold text-sm mt-5 leading-tight">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between px-5 py-3 mb-2">
          <h5>{data.fileSize}</h5>
          <span className="w-7 h-7 rounded-full bg-zinc-600 flex items-center justify-center ">
            {data.close ? <IoClose /> :  <LuDownload size=".8em" color="#fff" /> }
          </span>
        </div>
        {data.tag.isOpen && (
          <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600": "bg-green-600"} flex items-center justify-center`}>
          <h3 className="text-md font-semibold">{data.tag.tagTitle}</h3>
        </div>
        ) }
        
      </div>
    </motion.div>
  )
}

export default Card
import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../style"
import { services } from "../constants"
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from "../hoc"

const ServiceCard = ({index, title, icon}) => {
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] "
      >
        <div
          options={{
            max:45,
            scale: 1,
            speed: 450
          }}
          className=" bg-zinc-900 rounded-[20px] py-5 px-12
           min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
          <h3 className=" text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("","",0.1,1)}
        className=" mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm an Engineer and Software Developer with experience in 
        <br/>
        <br/>(a) Web Development: React, Node.JS, Express, MongoDB, Three.JS ans MySQL.
        <br/>(b) Game Development: Unity(C#), Unreal(C++, Blueprint) and Blender3d for Textures and Animations
        <br/>(c) Android Development: Android Studio (Java)
        <br/>
        <br/>I'm a quick learner and a real-world problem solver.
        <br/>Let's work together to bring your ideas to life.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")
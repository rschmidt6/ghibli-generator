import { Film } from "../../types/ghibli.ts";
import { motion } from "framer-motion";

interface FilmComponentProps {
  film: Film;
}

export default function FilmComponent({ film }: FilmComponentProps) {
  return (
    <motion.div
      className="max-w-6xl mx-auto p-4 lg:p-8 font-body"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div className="flex flex-col lg:flex-row gap-8">
        {/* Image container with slide-in and fade animation */}
        <motion.div
          className="lg:w-1/3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: "easeOut",
          }}
        >
          <motion.img
            src={film.image}
            alt={film.title}
            className="w-full rounded-lg shadow-lg object-cover"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: "easeOut",
            }}
          />
        </motion.div>

        {/* Text content container with staggered animations */}
        <motion.div
          className="lg:w-2/3 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.4,
            ease: "easeOut",
          }}
        >
          {/* Title section with separate animation */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.5,
            }}
          >
            <h1 className="text-3xl text-gray-900">{film.title}</h1>
            <h2 className="text-xl text-gray-700">{film.original_title}</h2>
          </motion.div>

          {/* Movie details with fade in */}
          <motion.div
            className="grid grid-cols-2 gap-4 text-sm text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.6,
            }}
          >
            <div>
              <span className="font-semibold">Release Date:</span>{" "}
              {film.release_date}
            </div>
            <div>
              <span className="font-semibold">Runtime:</span>{" "}
              {film.running_time} minutes
            </div>
            <div>
              <span className="font-semibold">Director:</span> {film.director}
            </div>
          </motion.div>

          {/* Description with fade in */}
          <motion.p
            className="text-gray-800 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.7,
            }}
          >
            {film.description}
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

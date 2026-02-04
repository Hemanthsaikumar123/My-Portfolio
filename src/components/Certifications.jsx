import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { certifications } from "../data/certifications";
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";

const useResponsiveItemsPerPage = () => {
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    const updateItems = () => {
      const width = window.innerWidth;
      if (width < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(4);
      }
    };

    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  return itemsPerPage;
};

const Certifications = () => {
  const categories = [
    "NPTEL",
    "Course Completions",
  ];

  const [selectedCategory, setSelectedCategory] = useState(categories[1]);
  const [selectedCert, setSelectedCert] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Helper function to parse date strings
  const parseDate = (dateString) => {
    return dateString ? new Date(dateString) : new Date(0);
  };

  // Sort certifications by date in descending order
  const sortedCertifications = (category) => {
    return certifications
      .filter((cert) => cert.category === category)
      .sort(
        (a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime()
      );
  };

  const itemsPerPage = useResponsiveItemsPerPage();
  const filteredCertifications = sortedCertifications(selectedCategory);
  const totalPages = Math.ceil(filteredCertifications.length / itemsPerPage);
  const paginatedCertifications = filteredCertifications.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when changing category
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="certifications" className="py-20 relative overflow-hidden bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Certifications
          </h2>
          <div className="h-1 w-24 bg-gray-300 dark:bg-white/30 rounded-full"></div>
        </motion.div>

        {/* Category Selection */}
        <div className="mb-8">
          {/* Mobile Category Selector */}
          <div className="block md:hidden mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Browse Certifications By
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="w-full bg-gray-50 dark:bg-white/5 backdrop-blur-sm border border-gray-300 dark:border-white/20 rounded-lg px-4 py-2 text-gray-900 dark:text-white focus:border-gray-500 dark:focus:border-white focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-white/20 transition-all"
            >
              {categories.map((category) => (
                <option key={category} value={category} className="bg-white dark:bg-gray-900">
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-6 py-2.5 rounded-full whitespace-nowrap transition-all duration-300 font-medium ${
                  selectedCategory === category
                    ? "bg-gray-900 dark:bg-white text-white dark:text-black border-2 border-gray-900 dark:border-white"
                    : "bg-white dark:bg-black border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white hover:border-2 hover:border-gray-500 dark:hover:border-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Certifications Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedCategory}-${currentPage}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {paginatedCertifications.map((cert) => (
                <motion.div
                  key={cert.id}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="h-full"
                >
                  <div className="h-full overflow-hidden border border-gray-200 dark:border-white/20 hover:border-2 hover:border-gray-400 dark:hover:border-white transition-all duration-300 rounded-xl bg-gray-50 dark:bg-white/5 backdrop-blur-sm">
                    <div className="p-0 flex flex-col h-full">
                      <div
                        className="h-48 w-full overflow-hidden cursor-pointer relative group"
                        onClick={() => setSelectedCert(cert)}
                      >
                        <img
                          src={cert.imageUrl || "placeholder.png"}
                          alt={cert.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                          <Maximize2 className="text-white h-10 w-10 drop-shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100" />
                        </div>
                      </div>
                      <div className="p-5 flex-1 flex flex-col">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2">
                          {cert.name}
                        </h4>
                        {cert.issuer && (
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                            <span className="text-gray-900 dark:text-white">Issuer:</span> {cert.issuer}
                          </p>
                        )}
                        {cert.date && (
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                            <span className="text-gray-900 dark:text-white">Date:</span> {cert.date}
                          </p>
                        )}
                        <div className="mt-auto pt-2">
                          <span className="inline-block px-3 py-1.5 text-xs font-medium bg-gray-100 dark:bg-white/10 border border-gray-300 dark:border-white/20 text-gray-700 dark:text-gray-300 rounded-lg">
                            {cert.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12 flex justify-center items-center gap-2">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/5 backdrop-blur-sm border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white hover:border-gray-500 dark:hover:border-white hover:border-2 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (pageNum) => (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`w-10 h-10 rounded-full transition-all duration-300 font-medium ${
                        pageNum === currentPage
                          ? "bg-gray-900 dark:bg-white text-white dark:text-black shadow-lg shadow-gray-400/50 dark:shadow-white/50 border-2 border-gray-900 dark:border-white"
                          : "bg-gray-100 dark:bg-white/5 backdrop-blur-sm border border-gray-300 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:border-gray-500 dark:hover:border-white hover:border-2 hover:text-gray-900 dark:hover:text-white"
                      }`}
                    >
                      {pageNum}
                    </button>
                  )
                )}
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/5 backdrop-blur-sm border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white hover:border-gray-500 dark:hover:border-white hover:border-2 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Modal for viewing certificate */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 dark:bg-black/80 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="relative max-w-5xl w-full bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border-2 border-gray-300 dark:border-white shadow-2xl flex flex-col max-h-[95vh]"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <button
                className="absolute top-4 right-4 z-10 bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-gray-700 dark:hover:bg-gray-200 rounded-full p-2 transition-all duration-300 shadow-md"
                onClick={() => setSelectedCert(null)}
              >
                <X className="h-6 w-6" />
              </button>

              <div className="p-6 bg-gray-50 dark:bg-black/60 backdrop-blur-sm border-b border-gray-200 dark:border-white/10 flex-shrink-0">
                <h3 className="font-semibold text-xl text-gray-900 dark:text-white drop-shadow-md mb-1">
                  {selectedCert.name}
                </h3>
                {selectedCert.issuer && (
                  <p className="text-sm text-gray-700 dark:text-gray-300 drop-shadow-sm">
                    <span className="text-gray-900 dark:text-white">Issuer:</span> {selectedCert.issuer}
                  </p>
                )}
                {selectedCert.date && (
                  <p className="text-sm text-gray-700 dark:text-gray-300 drop-shadow-sm">
                    <span className="text-gray-900 dark:text-white">Date:</span> {selectedCert.date}
                  </p>
                )}
              </div>

              <div className="bg-white dark:bg-gray-900 p-4 overflow-auto flex-1">
                <img
                  src={selectedCert.imageUrl || "placeholder.png"}
                  alt={selectedCert.name}
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;

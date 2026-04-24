function CategoryCard({ img, title, desc }) {
  return (
    <div className="relative h-[200px] md:h-[260px] overflow-hidden group cursor-pointer">
      <img
        src={img}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/55 transition-all duration-300" />
      <div className="absolute bottom-0 left-0 p-5 text-white">
        <h3 className="text-xl font-serif mb-1">{title}</h3>
        <p className="text-white/70 text-xs leading-relaxed max-w-xs">{desc}</p>
      </div>
    </div>
  );
}

export default CategoryCard;
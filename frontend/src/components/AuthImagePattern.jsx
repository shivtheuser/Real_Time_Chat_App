const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12 mt-8">
      {/* Added mt-8 for spacing from navbar */}
      <div className="max-w-md text-center">
        <div className="grid grid-cols-3 gap-3 mb-6">
          {" "}
          {/* Reduced mb-8 to mb-6 for better spacing */}
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-2xl bg-primary/10 ${
                i % 2 === 0 ? "animate-pulse" : ""
              }`}
            />
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base-content/60">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;

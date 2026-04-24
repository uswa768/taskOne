function ProfileCard() {
  return (
    <div className="bg-white rounded-2xl shadow p-6 w-80">

      {/* Profile Image */}
      <div className="flex justify-center">
        <img
          src="https://i.pravatar.cc/150"
          alt="profile"
          className="w-24 h-24 rounded-full object-cover"
        />
      </div>

      {/* Name */}
      <h2 className="text-xl font-semibold text-center mt-4">
        Uswa Asif
      </h2>

      {/* Email / Role */}
      <p className="text-gray-500 text-center text-sm">
        Frontend Developer
      </p>

      {/* Bio */}
      <p className="text-center text-gray-600 text-sm mt-3">
        Passionate about building modern web apps using React & Tailwind.
      </p>

      {/* Button */}
      <div className="flex justify-center mt-5">
        <button className="bg-[#c8a46b] px-5 py-2 rounded-lg text-black">
          View Profile
        </button>
      </div>

    </div>
  );
}

export default ProfileCard;
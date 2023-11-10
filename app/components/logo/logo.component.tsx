import Image from "next/image";

const Logo = () => {
  return (
    <div className="logo">
      <Image
        className="logo__image"
        src={ '/logo-test-1.png' }
        width={ 100 }
        height={ 100 / 1.327 }
        alt='World Headquarters Logo'
      />
    </div>
  )
};

export default Logo;
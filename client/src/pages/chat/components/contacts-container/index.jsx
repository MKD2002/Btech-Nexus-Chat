const ContactsContainer = () => {
  return (
    <div className="relative md:w-[35vw] lg:w-[30vw] xl:w-[20vw] bg-[#1b1c24] border-r-2 border-[#2f303b] w-full">
        <div class="pt-3">
            <Logo />
        </div>
        <div class="my-5">
            <div class="flex items-center justify-between pr-10">
                <Title
                    text="Direct Messages"
                />
            </div>
        </div>
        <div class="my-5">
            <div class="flex items-center justify-between pr-10">
                <Title
                    text="Channels"
                />
            </div>
        </div>
    </div>
  )
}

export default ContactsContainer

const Logo = () => {
    return (
      <div className="flex items-center justify-start gap-2 p-5">
        <svg
          id="logo-38"
          width="78"
          height="32"
          viewBox="0 0 78 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <path
            d="M55.5 0H77.5L58.5 32H36.5L55.5 0Z"
            className="ccustom"
            fill="#8338ec"
          ></path>{" "}
          <path
            d="M35.5 0H51.5L32.5 32H16.5L35.5 0Z"
            className="ccompli1"
            fill="#975aed"
          ></path>{" "}
          <path
            d="M19.5 0H31.5L12.5 32H0.5L19.5 0Z"
            className="ccompli2"
            fill="#a16ee8"
          ></path>{" "}
        </svg>
        <span className="text-3xl font-semibold ">Btech-Nexus</span>
      </div>
    );
  };


const Title = ({text}) => {
    return (
        <h6 className="pl-10 text-sm font-light tracking-widest uppercase text-neutral-400 text-opacity-90 ">
            {text}
        </h6>
    )
}
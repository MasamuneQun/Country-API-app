import "./globals.css";
export default function RootLayout(props) {
  return (
    <html lang="en">
      <body>
        <div className="h-screen w-full flex flex-col relative">
          <div className="bg-White p-6 drop-shadow-[0px_-25px_20px_#858585] select-none">
            <nav className="flex flex-row justify-between ">
              <h1 className="ml-6 font-bold text-2xl">Where in the world?</h1>
              <h1 className="mr-6 flex font-semibold mt-2">
                <div>
                  <img
                    src="moon-outline.svg"
                    alt="moon"
                    className="h-[30px] w-[30px] pb-2"
                  />
                </div>
                <p className="select-none">Dark Mode</p>
              </h1>
            </nav>
          </div>
          <div className="w-full grow bg-LightBackground">{props.children}</div>
        </div>
      </body>
    </html>
  );
}

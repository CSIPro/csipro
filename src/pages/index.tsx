import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center bg-muted">
        <span className="flex flex-wrap items-center justify-center gap-2 font-poppins text-6xl text-primary-foreground">
          <h1 className="">CSI PRO</h1>
          <span className="flex min-h-0 min-w-0 bg-primary p-1 font-medium text-white">
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("COMING SOON").start();
              }}
              options={{
                cursor: "",
              }}
            />
          </span>
        </span>
      </div>
    </>
  );
}

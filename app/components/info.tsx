import Image from 'next/image'

const Info = () => {
  return (
    <div className="info">
      <div className="animate-fade relative col-start-2 sm:col-start-3">
        <Image className="rounded-2xl" src="/avatar.png" width={500} height={500} alt="avatar" />
      </div>
      <h3 className="animate-fade relative col-start-4 whitespace-nowrap font-mono text-5xl font-semibold text-zinc-950 sm:col-start-6">
        hello world
      </h3>
    </div>
  )
}

export default Info

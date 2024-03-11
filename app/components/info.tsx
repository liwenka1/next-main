import { SITE } from '@/data/config'

import Image from 'next/image'

const Info = () => {
  return (
    <div className="info">
      <div className="relative col-start-2 animate-fade sm:col-start-3">
        <Image className="rounded-2xl" src={SITE.avatar} width={500} height={500} alt="avatar" />
      </div>
      <h3 className="relative col-start-4 animate-fade whitespace-nowrap font-mono text-5xl font-semibold text-zinc-950 sm:col-start-6">
        {SITE.title}
      </h3>
    </div>
  )
}

export default Info

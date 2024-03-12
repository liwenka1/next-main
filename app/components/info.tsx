import { SITE } from '@/data/config'

import Image from 'next/image'

const Info = () => {
  return (
    <div className="info">
      <div className="avatar">
        <Image src={SITE.avatar} width={500} height={500} alt="avatar" />
      </div>
      <h3 className="headline">{SITE.headline}</h3>
    </div>
  )
}

export default Info

import Info from './info'
import Refresh from './refersh'

const Main = () => {
  return (
    <section className="relative aspect-video w-full overflow-hidden rounded-3xl bg-zinc-50 dark:bg-zinc-950">
      <Refresh />
      <Info />
    </section>
  )
}

export default Main

import { PlusIcon } from '../icons/PlusIcon'
import { ShareIcon } from '../icons/ShareIcon'
import { Card } from '../components/ui/Card'
import { CreateContentModal } from '../components/ui/CreateContentModal'
import { SideBar } from '../components/ui/Sidebar'
import { Button } from '../components/ui/Button'
import { useState } from 'react'
import { TwitterIcon } from '../icons/TwitterIcon'
import { YoutubeIcon } from '../icons/YoutubeIcon'
function Dashboard() {
    const [modalOpen, setModalOpen] = useState(false);
  return (<div className='bg-gray-100 h-screen'>
    <SideBar />
    <div className='p-3 ml-72'>
      <CreateContentModal open={modalOpen} onClose={() => { setModalOpen(false) }} />

      <div className='flex justify-end'>
        <Button startIcon={<PlusIcon />} variant="primary" text="Add Content" onClick={() => { setModalOpen(true) }} />
        <Button startIcon={<ShareIcon />} variant="secondary" text="Share Brain" onClick={() => { }} />
      </div>
      <div className='flex gap-8 items-start' >
        <Card type='youtube' link='https://www.youtube.com/watch?v=umejNI-fafg' title='Harkirat Singh' icon={ <YoutubeIcon/> } />
        <Card type='tweet' link='https://x.com/narendramodi/status/1984141051100107194' title='Narendra Modi' icon={ <TwitterIcon/> } />
      </div>
    </div>
  </div>
  )
}
export default Dashboard
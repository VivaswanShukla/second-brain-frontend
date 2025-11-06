import { PlusIcon } from '../icons/PlusIcon'
import { ShareIcon } from '../icons/ShareIcon'
import { Card } from '../components/ui/Card'
import { CreateContentModal } from '../components/ui/CreateContentModal'
import { SideBar } from '../components/ui/Sidebar'
import { Button } from '../components/ui/Button'
import { useState } from 'react'
import { TwitterIcon } from '../icons/TwitterIcon'
import { YoutubeIcon } from '../icons/YoutubeIcon'
import { useContent } from '../hooks/useContent'
import axios from 'axios'
import { BACKEND_URL } from '../config'
function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const { contents, refresh } = useContent();

  return (<div className='bg-gray-100 h-full'>
    <SideBar />
    <div className='p-3 ml-72'>
      <CreateContentModal open={modalOpen} onClose={() => { setModalOpen(false) }} />

      <div className='flex justify-end'>
        <Button startIcon={<PlusIcon />} variant="primary" text="Add Content" onClick={() => { setModalOpen(true) }} />
        <Button startIcon={<ShareIcon />} variant="secondary" text="Share Brain" onClick={async () => {
          const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share`, {
            share: true
          },{
              headers:{
                "Authorization": localStorage.getItem("token")
              }
          })
          const shareURL = `http://localhost:5173/share/${response.data.hash}`;
          alert(shareURL)
        }} />
      </div>
      <div className='flex gap-8 flex-wrap items-start' >
        {/* {JSON.stringify(contents)} */}
        {contents.map(({ title, link, type }) =>
          <Card type={type} link={link} title={title} icon={type === "twitter" ? <TwitterIcon /> : <YoutubeIcon />} />
        )}
      </div>
    </div>
  </div>
  )
}
export default Dashboard
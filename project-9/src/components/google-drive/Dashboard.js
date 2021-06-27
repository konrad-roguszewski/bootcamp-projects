import React from 'react'
import Navbar from './Navbar'
import { Container } from 'react-bootstrap'
import AddFolderButton from './AddFolderButton'
import { useFolder, childFolders } from '../../hooks/useFolder'
import Folder from './Folder'


export default function Dashboard() {
  const { folder } = useFolder("IX5a5KNh2JllYwjXICdD")
  console.log(folder)

  return (
    <>
      <Navbar />
      <Container fluid>
        <AddFolderButton currentFolder={folder}/>
        {childFolders.length > 0 && (
          <div className="d-flex flex-wrap">
            {childFolders.map(childFolder => (
              <div
                key={folder.id}
                style={{ maxWidth: '250px' }}
                className="p-2"
              >
                <Folder folder={childFolder} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </>
  )
}

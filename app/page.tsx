'use client'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Chat } from '@/components/chat'
import { Fragment, useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

export const runtime = 'edge'

export default function Page() {
  const [isValid, setIsValid] = useState(false)
  const [sitePassword, setSitePassword] = useState('')

  const checkPassord = () => {
    if (sitePassword === '#Codiste74') {
      localStorage.setItem('valid', 'true')
      setIsValid(true)
    }
  }

  useEffect(() => {
    if (localStorage.getItem('valid') === 'true') setIsValid(true)
  }, [])

  return (
    <>
      {isValid ? (
        <Chat />
      ) : (
        <div>
          <Fragment>
            <Modal
              show
              onHide={() => {}}
              backdrop="static"
              keyboard={false}
              centered
            >
              <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                  Please enter password
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <input
                  type={'password'}
                  className="w-100 form-control"
                  placeholder="Enter Password"
                  value={sitePassword}
                  onChange={e => setSitePassword(e.target.value)}
                />
              </Modal.Body>
              <Modal.Footer>
                <Button
                  className="btnPrimary w-100"
                  type="submit"
                  onClick={checkPassord}
                >
                  Login
                </Button>
              </Modal.Footer>
            </Modal>
          </Fragment>
        </div>
      )}
      {/* <ToastContainer /> */}
    </>
  )
}

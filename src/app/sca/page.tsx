import Image from "next/image"
import styles from './styles.module.scss'
import { BankLogo, MobiilivarmenneImg, VarmennekorttiImg } from "../contants"

export default function Page() {
  return (
    <div className="box is-fullwidth">
      <p className="is-size-6 has-text-weight-bold">You are authorizing to service</p>
      <p className="is-size-4">Piggybank Plc Portal</p>
      <div className="columns is-vcentered">
        <a href="portal" className={styles.bankLink}>
          <div className="column p-5 is-flex is-flex-direction-column is-align-items-center">
            <figure className="image is-96x96 mb-3">
              <img src={VarmennekorttiImg} alt="Varmennekortti" width="128" height="128" style={{ maxHeight: "128px" }} />
            </figure>
            <figcaption>Varmennekortti</figcaption>
          </div>
        </a>
        <a href="/portal" className={styles.bankLink}>
          <div className="column p-5 is-flex is-flex-direction-column is-align-items-center">
            <figure className="image is-96x96 mb-3">
              <img src={MobiilivarmenneImg} alt="Mobiilivarmenne" width="128" height="128" />
            </figure>
            Mobiilivarmenne
          </div>
        </a>
        <a href="/portal" className={styles.bankLink}>
          <div className="column p-5 is-flex is-flex-direction-column is-align-items-center">
            <figure className="image is-96x96 mb-3">
              <img src={BankLogo} alt="Varmennekortti" width="128" height="128" />
            </figure>
            Piggybank Plc
          </div>
        </a>
      </div>
    </div>
  )
}
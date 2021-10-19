/* eslint-disable no-restricted-globals */
import { request, gql } from 'graphql-request'
import { Project } from '../../types'

let cachedVal: Project | undefined

export default function (): Project {
    if (cachedVal) {
        return cachedVal;
    }

    let localConfig: unknown = window.localStorage.getItem('projectConfig')
    localConfig = !localConfig ? null as null: JSON.parse(localConfig as string)
    const promise = request('https://api.concha.io/api/graphql', query)
    
    promise.then((projectConfig) => {
        window.localStorage.setItem('projectConfig', JSON.stringify(projectConfig.Project))

        cachedVal = projectConfig.Project
    })

    if (!localConfig) {
        document.body.style.display = 'none'
        promise.finally(() => location.reload())

        throw new Error('Config not loaded')
    }

    return localConfig as Project;
}

const query = gql`
  query {
    Project(where: {id: "ckrbsgs3b008972he15vja271"} ) {
      name
      images {
        name
        image {
          publicUrl
        }
      }
      themes {
        type
        failure
        primary
        primaryBright
        primaryDark
        secondary
        success
        binance
        overlay
        background
        backgroundDisabled
        backgroundAlt
        cardBorder
        contrast
        dropdown
        dropdownDeep
        invertedContrast
        input
        inputSecondary
        tertiary
        text
        textDisabled
        textSubtle
        disabled
        gradientBubblegum
        gradientInverseBubblegum
        gradientCardHeader
        gradientBlue
        gradientViolet
        gradientVioletAlt
        gradientGold
      }
    }
  }
`
/*

export default function getConfig (): Project {
    if (cachedVal) {
        return cachedVal;
    }

    let localConfig: unknown = window.localStorage.getItem('projectConfig')
    localConfig = !localConfig ? null as null: JSON.parse(localConfig as string)

    fetch('https://api.concha.io/api/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            query
        })
    }).then((res) => {
        return res.json()
    }).then((projectConfig) => {
        window.localStorage.setItem('projectConfig', JSON.stringify(projectConfig.data.Project))

        cachedVal = projectConfig.Project
    }).finally(() => {
        if (!localConfig) {
            location.reload()
        }
    })

    if (!localConfig) {
        document.body.style.display = 'none'
    }

    return localConfig as Project;
}
>>>>>>> 7574e28fe0f09a8eba42e0326f13ed3e99d84a1e
*/
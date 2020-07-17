import _ from 'lodash'

function debug() {
  // eslint-disable-next-line no-console
  const log = console.log

  // eslint-disable-next-line no-console
  console.log = function debugLog(...args) {
    log.apply(
      console,
      args.map((item) => {
        if (typeof item !== 'object') {
          return item
        }

        try {
          return JSON.stringify(item, null, 2)
        } catch (err) {
          return item
        }
      })
    )
  }
}

export function enableDebugOutput(options) {
  const opts = _.defaults({}, options, {
    forceEnableInProd: false,
  })

  if (process.env.NODE_ENV !== 'development' && !opts.forceEnableInProd) {
    return
  }

  debug()
}

export default {
  enable: enableDebugOutput,
}

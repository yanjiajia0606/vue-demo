import './libs/meshLine'
import line from './modules/line/index'
import panel from './modules/panel/index'
import util from './modules/util'
import other from './modules/other/index'

export default {
  util,
  ...line,
  ...panel,
  ...other
}

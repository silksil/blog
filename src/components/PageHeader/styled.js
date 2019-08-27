

import styled from "styled-components";
import { breakpoints } from "../../packages/breakpoints";
import { PageHeader} from '../../packages/headers'

const StyledPageHeader = styled(PageHeader)`
  height: 85vh;
  ${breakpoints.md} {
  height: 90vh;
  }
`

export default StyledPageHeader;


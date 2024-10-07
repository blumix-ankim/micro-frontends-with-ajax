import './style.css'
import { loadFragment } from "./fragment";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="main">대문입니다.</div>

  <div id="team-jobs-recommendation"
  data-fragment="http://localhost:3002/jobs/fragments/recommendation">
  </div>
`;
loadFragment(
  document.querySelector<HTMLDivElement>("#team-jobs-recommendation")!
);
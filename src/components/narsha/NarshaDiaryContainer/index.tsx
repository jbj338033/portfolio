import { useParams, useNavigate } from "react-router-dom";
import NarshaDiary from "../NarshaDiary";
import { NARSHA_PROJECTS } from "../../../constants/narsha";

const NarshaDiaryContainer = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const currentProject = NARSHA_PROJECTS.find(
    (project) => project.id === Number(projectId)
  );

  if (!currentProject) {
    navigate("/narsha");
    return null;
  }

  return (
    <NarshaDiary
      entries={currentProject.entries}
      projectId={currentProject.id}
    />
  );
};

export default NarshaDiaryContainer;

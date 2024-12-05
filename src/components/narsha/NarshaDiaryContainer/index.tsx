import { useParams, useNavigate } from "react-router-dom";
import { NARSHA_PROJECTS } from "../../../constants/narsha";
import NarshaDiary from "../NarshaDiary";

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

import { Button } from "@mui/material";
import { numberOfImplementations } from "../../utils/constants";
import { useNavigate } from "react-router";
import { AppRoutes } from "../../Routes";

const Home = () => {
  const navigate = useNavigate();

  const handleHomeBtnClick = (index: number) => {
    if (!index || index <= 0) {
      return;
    } else {
      switch (index) {
        case 1:
          navigate(AppRoutes.V1);
          break;
        case 2:
          navigate(AppRoutes.V2);
          break;
        default:
          break;
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-md font-bold">
        this is a project to understand google places api
      </h1>

      <p className="text-md text-center max-w-md underline underline-offset-2 mt-4 text-gray-800 text-sm font-medium text-muted-foreground">
        There are {numberOfImplementations} implementations:
      </p>

      <div className="flex gap-4 mt-4">
        {Array.from({ length: numberOfImplementations }).map((_, index) => (
          <div key={index}>
            <Button
              variant="outlined"
              size="medium"
              type="button"
              sx={{ textTransform: "none" }}
              onClick={() => handleHomeBtnClick(index + 1)}
            >
              <p className="text-sm font-medium">Implementation {index + 1}</p>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

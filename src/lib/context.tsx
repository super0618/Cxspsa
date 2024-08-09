import React, {
  Dispatch,
  SetStateAction,
  useState,
  useLayoutEffect,
  createContext,
} from "react";
import request from "../utils/request";

const defaultAuth = false;
const defaultLoading = false;
const defaultToken: string | null = null;
const defaultProfile: any = {};
const defaultCurrentProject = {};
const defaultProjects: any[] = [];
const defaultOwners: any[] = [];

type GlobalContextType = {
  auth: boolean;
  setAuth: Dispatch<SetStateAction<boolean>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  token: string | null;
  setToken: Dispatch<SetStateAction<string | null>>;
  profile: any;
  setProfile: Dispatch<SetStateAction<any>>;
  currentProject: any;
  setCurrentProject: Dispatch<SetStateAction<any>>;
  projects: any[];
  setProjects: Dispatch<SetStateAction<any[]>>;
  owners: any[];
  setOwners: Dispatch<SetStateAction<any[]>>;
};

export const GlobalContext = createContext<GlobalContextType>({
  auth: defaultAuth,
  setAuth: () => {},
  loading: defaultLoading,
  setLoading: () => {},
  token: defaultToken,
  setToken: () => {},
  profile: defaultProfile,
  setProfile: () => {},
  currentProject: defaultCurrentProject,
  setCurrentProject: () => {},
  projects: defaultProjects,
  setProjects: () => {},
  owners: defaultOwners,
  setOwners: () => {},
});

interface GlobalContextProps {
  children: React.ReactNode;
}

export const GlobalContextProvider = ({ children }: GlobalContextProps) => {
  const [auth, setAuth] = useState<boolean>(defaultAuth);
  const [loading, setLoading] = useState<boolean>(defaultLoading);
  const [token, setToken] = useState<string | null>(defaultToken);
  const [profile, setProfile] = useState<any>(defaultProfile);
  const [currentProject, setCurrentProject] = useState<any>(
    defaultCurrentProject
  );
  const [projects, setProjects] = useState<any[]>(defaultProjects);
  const [owners, setOwners] = useState<any[]>(defaultOwners);

  useLayoutEffect(() => {
    (async () => {
      try {
        setLoading(true);

        const token = localStorage.getItem("cxspsa");
        if (token && token.trim().length > 0) {
          request.setToken(token);
          const result: any = await request.post("check");

          if (result?.authenticated) {
            setAuth(true);
            setToken(token);
            setProfile(result.user);
            setCurrentProject(result.projects.length ? result.projects[0] : {});
            setProjects(result.projects);
            setOwners(result.owners);
          } else {
            setAuth(false);
            setToken(null);
            setProfile({});
            setCurrentProject({});
            setProjects([]);
          }
        }
      } catch (error: any) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        auth,
        setAuth,
        loading,
        setLoading,
        token,
        setToken,
        profile,
        setProfile,
        currentProject,
        setCurrentProject,
        projects,
        setProjects,
        owners,
        setOwners,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

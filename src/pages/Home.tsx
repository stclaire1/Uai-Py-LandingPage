import { Layout } from "@/components/layout/Layout";
import { Features } from "@/components/sections/Features";
import { Hero } from "@/components/sections/Hero";
import { ProjectConcept } from "@/components/sections/ProjectConcept";
import { Team } from "@/components/sections/Team";
import { RepoRedirect } from "@/components/sections/RepoRedirect";
import { CTA} from "@/components/sections/CTA";
import { TechEvents } from "@/components/sections/TechEvents";
import { Demo } from "@/components/sections/Demo";
import { PublicProjects } from "@/components/sections/PublicProjects";

export const Home = () => {
    return (
        <Layout>
            <Hero />
            <PublicProjects />
            <ProjectConcept />
            <Features />
            <Team />
            <RepoRedirect />
            <CTA />
            <TechEvents />
            <Demo />
        </Layout>
    );
}


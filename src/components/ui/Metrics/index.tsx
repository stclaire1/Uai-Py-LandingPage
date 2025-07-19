type MetricsProps = {
    title?: string;
    description?: string;
}

const Metrics = ({ title, description }: MetricsProps) => {
    return (
        <div className="flex flex-col items-center max-w-[150px]">
            <p className="font-bold text-[38px] lg:text-[44px] xl:text-[50px]">{title}</p>
            <p className="text-sm text-center">{description}</p>
        </div>
    )
}

export default Metrics;
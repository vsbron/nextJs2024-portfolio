function Section({ children, id }: { children: any; id?: string }) {
  // Returned JSX
  return (
    <section className="py-12 md:py-20" id={id}>
      {children}
    </section>
  );
}

export default Section;

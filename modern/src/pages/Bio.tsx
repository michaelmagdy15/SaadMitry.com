import React from 'react';
import Timeline from '../components/Timeline';
import ImportantDates from '../components/ImportantDates';
import FamilyTree from '../components/FamilyTree';
import ScrollReveal from '../components/ScrollReveal';


const Bio: React.FC = () => {
    return (
        <div className="bg-memorial-dark min-h-screen">
            <Timeline />

            {/* Important Dates Section */}
            <ScrollReveal animation="fade-up" width="100%">
                <ImportantDates />
            </ScrollReveal>

            {/* Family Tree Section */}
            <ScrollReveal animation="fade-in" width="100%">
                <FamilyTree />
            </ScrollReveal>
        </div>
    );
};

export default Bio;

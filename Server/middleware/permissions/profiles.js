function canViewProfile(person, profile) {
    return (
        person.role === 'admin' ||
        person.id === profile.person.id
    )
};


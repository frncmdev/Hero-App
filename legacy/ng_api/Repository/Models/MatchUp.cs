using System;
using System.Collections.Generic;

namespace ng_api.Repository.Models;

public partial class MatchUp
{
    public int MatchupId { get; set; }

    public DateTime MatchupTime { get; set; }

    public string Winner { get; set; } = null!;

    public int HeroId { get; set; }

    public int VillainId { get; set; }

    public virtual Hero Hero { get; set; } = null!;

    public virtual Villain Villain { get; set; } = null!;
}

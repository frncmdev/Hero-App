using System;
using System.Collections.Generic;

namespace ng_api.Models;

public partial class Hero
{
    public int HeroId { get; set; }

    public string HeroName { get; set; } = null!;

    public int Health { get; set; }

    public int MinAttack { get; set; }

    public int MaxAttack { get; set; }

    public string ImgUrl { get; set; } = null!;

    public virtual ICollection<MatchUp> MatchUps { get; } = new List<MatchUp>();
}

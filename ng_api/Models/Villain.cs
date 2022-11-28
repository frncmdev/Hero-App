using System;
using System.Collections.Generic;

namespace ng_api.Models;

public partial class Villain
{
    public int VillainId { get; set; }

    public string VillainName { get; set; } = null!;

    public int Health { get; set; }

    public int MinAttack { get; set; }

    public int MaxAttack { get; set; }

    public string ImgUrl { get; set; } = null!;

    public virtual ICollection<MatchUp> MatchUps { get; } = new List<MatchUp>();
}

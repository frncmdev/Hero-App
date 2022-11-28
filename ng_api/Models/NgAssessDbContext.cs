using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace ng_api.Models;

public partial class NgAssessDbContext : DbContext
{
    public NgAssessDbContext()
    {
    }

    public NgAssessDbContext(DbContextOptions<NgAssessDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Hero> Heroes { get; set; }

    public virtual DbSet<MatchUp> MatchUps { get; set; }

    public virtual DbSet<Villain> Villains { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=.\\SQLExpress;Database=ng_assess_db;Trusted_Connection=True;TrustServerCertificate=True");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Hero>(entity =>
        {
            entity.HasKey(e => e.HeroId).HasName("PK__Hero__85837933CCE2DA54");

            entity.ToTable("Hero");

            entity.HasIndex(e => e.HeroName, "UQ__Hero__DF0955D7FF310099").IsUnique();

            entity.Property(e => e.HeroId)
                .ValueGeneratedNever()
                .HasColumnName("hero_id");
            entity.Property(e => e.Health).HasColumnName("health");
            entity.Property(e => e.HeroName)
                .HasMaxLength(50)
                .HasColumnName("hero_name");
            entity.Property(e => e.ImgUrl).HasColumnName("img_url");
            entity.Property(e => e.MaxAttack).HasColumnName("max_attack");
            entity.Property(e => e.MinAttack).HasColumnName("min_attack");
        });

        modelBuilder.Entity<MatchUp>(entity =>
        {
            entity.HasKey(e => e.MatchupId).HasName("PK__MatchUp__FC6D36F397D8C4FA");

            entity.ToTable("MatchUp");

            entity.Property(e => e.MatchupId)
                .ValueGeneratedNever()
                .HasColumnName("matchup_id");
            entity.Property(e => e.HeroId).HasColumnName("hero_id");
            entity.Property(e => e.MatchupTime).HasColumnName("matchup_time");
            entity.Property(e => e.VillainId).HasColumnName("villain_id");
            entity.Property(e => e.Winner)
                .HasMaxLength(7)
                .HasColumnName("winner");

            entity.HasOne(d => d.Hero).WithMany(p => p.MatchUps)
                .HasForeignKey(d => d.HeroId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("fk_hero_matchup");

            entity.HasOne(d => d.Villain).WithMany(p => p.MatchUps)
                .HasForeignKey(d => d.VillainId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("fk_Villain_matchup");
        });

        modelBuilder.Entity<Villain>(entity =>
        {
            entity.HasKey(e => e.VillainId).HasName("PK__Villain__8D6B3A5AB73B055E");

            entity.ToTable("Villain");

            entity.HasIndex(e => e.VillainName, "UQ__Villain__0B3B61B0C855515C").IsUnique();

            entity.Property(e => e.VillainId)
                .ValueGeneratedNever()
                .HasColumnName("villain_id");
            entity.Property(e => e.Health).HasColumnName("health");
            entity.Property(e => e.ImgUrl).HasColumnName("img_url");
            entity.Property(e => e.MaxAttack).HasColumnName("max_attack");
            entity.Property(e => e.MinAttack).HasColumnName("min_attack");
            entity.Property(e => e.VillainName)
                .HasMaxLength(50)
                .HasColumnName("villain_name");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}

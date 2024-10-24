const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.solid,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Plugins.Keyboard,
		C3.Behaviors.Sin,
		C3.Plugins.BinaryData,
		C3.Plugins.Audio,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Behaviors.Platform.Cnds.IsOnFloor,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Audio.Acts.PlayByName,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Audio.Cnds.IsTagPlaying,
		C3.Plugins.Audio.Acts.Play
	];
};
self.C3_JsPropNameTable = [
	{Sólido: 0},
	{spr_ground01: 0},
	{Plataforma: 0},
	{CentrarEm: 0},
	{spr_player: 0},
	{Teclado: 0},
	{spr_plataforma_01: 0},
	{spr_platafroma_02: 0},
	{spr_plataforma_03: 0},
	{Senóide: 0},
	{spr_plataforma_04: 0},
	{spr_ball: 0},
	{Sprite: 0},
	{spr_arrow: 0},
	{spr_bg_02: 0},
	{spr_bg_03: 0},
	{spr_bg_04: 0},
	{DadosBinários: 0},
	{spr_bg_01: 0},
	{spr_death: 0},
	{Áudio: 0},
	{Sprite2: 0},
	{spr_grass_01: 0},
	{spr_grass_02: 0}
];

self.InstanceType = {
	spr_ground01: class extends self.ISpriteInstance {},
	spr_player: class extends self.ISpriteInstance {},
	Teclado: class extends self.IInstance {},
	spr_plataforma_01: class extends self.ISpriteInstance {},
	spr_platafroma_02: class extends self.ISpriteInstance {},
	spr_plataforma_03: class extends self.ISpriteInstance {},
	spr_plataforma_04: class extends self.ISpriteInstance {},
	spr_ball: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {},
	spr_arrow: class extends self.ISpriteInstance {},
	spr_bg_02: class extends self.ISpriteInstance {},
	spr_bg_03: class extends self.ISpriteInstance {},
	spr_bg_04: class extends self.ISpriteInstance {},
	DadosBinários: class extends self.IBinaryDataInstance {},
	spr_bg_01: class extends self.ISpriteInstance {},
	spr_death: class extends self.ISpriteInstance {},
	Áudio: class extends self.IInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	spr_grass_01: class extends self.ISpriteInstance {},
	spr_grass_02: class extends self.ISpriteInstance {}
}